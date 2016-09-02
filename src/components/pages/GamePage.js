import React from 'react';
import ReactDOM from 'react-dom';

import { computeScrollTopToKeepOnInBounds } from '../../lib/utils';
import Card from '../Card';
import PartBar from '../bars/PartBar';
import SkillBar from '../bars/SkillBar';
import Page from './Page';


export default class GamePage extends Page {
  _handleScroll(event) {
    const nextScrollTop = computeScrollTopToKeepOnInBounds(this._skillsScrollerNode, this._skillsNode);
    if (nextScrollTop !== null) {
      this._skillsNode.scrollTop = nextScrollTop;
    }
  }

  constructor() {
    super();

    this._skillsNode = null;
    this._skillsScrollerNode = null;
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this._skillsNode = node.querySelector('.game-page__parts-and-skills');
    this._skillsScrollerNode = this._skillsNode.querySelector('ul');
  }

  render() {
    const _createCards = (count, className) => {
      return Array.from({ length: count }).map((notUsed, index) => {
        return <div key={ `card-${ index }` } className={ className }>
          <Card />
        </div>;
      });
    };

    const cards = _createCards(3, 'game-page__field__card');

    return (
      <div
        className="game-page"
        onScroll={ this._handleScroll.bind(this) }
      >
        <div className="game-page__header">
          Header
        </div>
        <div className="game-page__field">
          { cards }
        </div>
        <div className="game-page__messages">
          Messages
        </div>
        <div className="game-page__controller">
          <div className="status-button">Stat</div>
          <div className="next-button">Next</div>
          <div className="system-button">Sys</div>
        </div>
        <div className="game-page__parts-and-skills">
          <ul>
            <li className="category-partition">Parts</li>
            <PartBar />
            <PartBar />
            <PartBar />
            <PartBar />
            <PartBar />
            <li className="category-partition">Skills</li>
            <SkillBar />
            <SkillBar />
            <SkillBar />
            <SkillBar />
            <SkillBar />
          </ul>
        </div>
      </div>
    );
  }
}
