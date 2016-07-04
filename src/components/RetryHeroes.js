import React from 'react';

import pages from './pages';


export default class RetryHeroes extends React.Component {

  _getCurrentPage() {
    return pages['GAME'];
    //return pages[this.props.pageId];
  }

  render() {
    const Page = this._getCurrentPage();
    const page = React.createElement(Page, {
      key: 'GAME',
      //key: this.props.pageId,
      root: this.props,
      //scene: this.props.scene,
    });

    return (
      <div className="rh">
        <div className="rh__page-container">
          { page }
        </div>
      </div>
    );
  }
}
