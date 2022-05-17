import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemon, exp, isWinner } = this.props;
    const title = isWinner ? (
      <h1 className="Pokedex-winner">Winning Hand</h1>
    ) : (
      <h1 className="Pokedex-loser">Losing hand</h1>
    );
    return (
      <div className="Pokedex">
        {title}
        <h4>Total experience: {exp}</h4>
        <div className="Pokedex-cards">
          {pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
