import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    const imgSrc = `${POKE_API}${id.toString().padStart(3, '0')}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img className="Pokecard-img" src={imgSrc} alt={name} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
