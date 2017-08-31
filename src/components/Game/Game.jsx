import axios from 'axios';
import cn from 'classnames';
import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner.svg';
import './Game.css';


// TODO: Game should be a prop rather than internal state


class Game extends Component {
  constructor() {
    super();
    this.state = {};

    this.renderGameDetails = this.renderGameDetails.bind(this);
  }

  componentDidMount() {
    const gameId = this.props.match.params.id;
    axios.get(`/api/game/${gameId}`)
    .then((res) => {
      this.setState({
        game: res.data.game || null
      });
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.game._id !== nextState.game._id ? true : false;
  // }

  renderGameDetails() {
    const game = this.state.game;

    if (!game) {
      return (
        <img src={Spinner} alt="Loading indicator" />
      );
    }

    return (
      <div>
        {/* TODO: This should be hidden behind admin privileges  */}
        <Link className="game-edit-link" to={`/game/edit/${game._id}`}>Edit Game</Link>
        <h2>{ game.title }</h2>
        <p>Developed by { game.developer }</p>
        <p>Published by { game.publisher }</p>
        <p>Released on { moment(game.releaseDate).format('MMMM Do, YYYY') }</p>

        <p className={cn('description')}>
          { game.description }
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className={cn('game')}>
        { this.renderGameDetails() }
      </div>
    );
  }
}

export default Game;