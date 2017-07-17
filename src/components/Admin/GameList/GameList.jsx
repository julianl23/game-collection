import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

class GameList extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };

    this.renderGameList = this.renderGameList.bind(this);

    axios.get('/api/games')
      .then((res) => {
        this.setState({
          games: res.data.games
        });
      });
  }

  renderGameList() {
    const games = this.state.games.map((game) => {
      return (
        <tr key={game._id}>
          <td className="game-title">
            <Link to={`/game/${game._id}`}>{game.title}</Link>
          </td>
          <td className="game-developer">{game.developer}</td>
          <td className="game-publisher">{game.publisher}</td>
          <td>
            <button onClick={(e) => this.deleteGame}>Delete Game</button>
          </td>
        </tr>
      )
    });

    return (
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Developer</td>
            <td>Publisher</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          { games }
          <tr>
            <td colSpan="4">
              <Link to="/game/add">+ Add New Game</Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className={cn('cp-admin')}>
        <h2>Game List</h2>
        { this.renderGameList() }
      </div>
    );
  }
}

export default GameList;
