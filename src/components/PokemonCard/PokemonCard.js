import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
  };

  componentDidMount() {
    const { name, url } = this.props;

    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5 card__container">
        <Link to={`pokemon/${this.state.pokemonIndex}`} className="card__main--link">
          <div className="card">
            <h4 className="card-title text-capitalize text-center pt-3 card__header">
                {this.state.name}
            </h4>
            <img
              className="card-img-top rounded mx-auto mt-2 card__main--image"
              src={this.state.imageUrl}
              alt={this.state.name}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default PokemonCard;