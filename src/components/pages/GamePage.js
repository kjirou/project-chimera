import React from 'react';

import Card from '../Card';
import Page from './Page';


export default class GamePage extends Page {

  render() {

    const _createCards = (count, className) => {
      return Array.from({ length: count }).map((notUsed, index) => {
        return <div key={ `card-${ index }` } className={ className }>
          <Card />
        </div>;
      });
    };

    return (
      <div className="game-page">
        <div className="game-page__header">
          Header
        </div>
        <div className="game-page__dungeon-cards">
          { _createCards(3, 'game-page__dungeon-cards__card-container') }
        </div>
        <div className="game-page__message-viewer">
          Message Viewer
        </div>
        <div className="game-page__character-cards">
          <div className="game-page__character-cards__tab-contents">
            <div className="game-page__character-cards__hand-cards">
              { _createCards(6, 'game-page__character-cards__tab-contents__card-container') }
            </div>
            <div className="game-page__character-cards__active-skills">
              { _createCards(6, 'game-page__character-cards__tab-contents__card-container') }
            </div>
            <div className="game-page__character-cards__equipments">
              { _createCards(6, 'game-page__character-cards__tab-contents__card-container') }
            </div>
            <div className="game-page__character-cards__passive-skills">
              { _createCards(6, 'game-page__character-cards__tab-contents__card-container') }
            </div>
          </div>
          <ul className="game-page__character-cards__tab-menus">
            <li className="tab-menu-is-selected">Hand</li>
            <li>Active</li>
            <li>Passive</li>
            <li>Equipments</li>
          </ul>
        </div>
      </div>
    );
  }
}
