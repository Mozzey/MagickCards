import React, { Component } from 'react';
import CheatCard from './CheatCard';

class CheatCards extends Component {
  state = {
    cheatCards: [
      {
        id: 1,
        title: 'npm install',
        description: `Used to install node package manager. Can be used with the -y flag to
          skip the initial information input. Creates a package.json file which
          stores all of your npm scripts and dependencies`,
        example: 'npm install or npm install -y'
      },
      {
        id: 2,
        title: 'npm install <package>',
        description: `install a node package`,
        example: 'npm install axios'
      }
    ]
  };
  render() {
    const { cheatCards } = this.state;
    return (
      <div>
        {cheatCards.map(card => (
          <CheatCard key={card.id} cheatCard={card} />
        ))}
      </div>
    );
  }
}

export default CheatCards;
