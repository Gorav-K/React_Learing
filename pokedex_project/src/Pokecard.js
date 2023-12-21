import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; 

class Pokecard extends Component {
    render() {
        let imagSrc = `${POKE_API}${this.props.id}.png`;//this is a template string 
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imagSrc} alt={this.props.name}/>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;