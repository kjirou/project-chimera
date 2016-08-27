export const killNativeUIEvents = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

export const cloneViaJson = (any) => {
  return JSON.parse(JSON.stringify(any));
};

/*
 * Compute the scroolTop to keep on in-bounds
 *
 * There is no way to modify the scrollTop, maybe.
 * Ref) https://github.com/jaridmargolin/bouncefix.js/blob/master/src/utils.js::scrollToEnd
 *
 * @param {HTMLElement} scroller
 * @param {HTMLElement} container - A parent node of the scroller
 * @return {(number|null)} - null is when there is no need to modify
 */
export const computeScrollTopToKeepOnInBounds = (scroller, container) => {
  const scrollerRect = scroller.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const scrollerEnd = scrollerRect.top + scrollerRect.height;
  const containerEnd = containerRect.top + containerRect.height;

  let modifiedScrollTop = null;
  const boundWidth = 1;

  if (scrollerRect.top + boundWidth > containerRect.top) {
    modifiedScrollTop = boundWidth;
  } else if (scrollerEnd - boundWidth < containerEnd) {
    modifiedScrollTop = scrollerRect.height - containerRect.height - boundWidth;
  }

  return modifiedScrollTop;
};
