import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';

class AddEditGame extends Component {
  constructor() {
    super();
    this.state = {
      game: {
        id: '',
        title: '',
        developer: '',
        publisher: '',
        releaseDate: moment().format('YYYY-MM-DD').toString(),
        description: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    const path = this.props.match.path;

    if (path.includes('/game/edit')) {
      const gameId = this.props.match.params.id;

      // TODO: This should go behind an abstraction layer
      axios.get(`/api/game/${gameId}`)
      .then((res) => {
        if (res.data.game._id) {
          const newState = {
            game: res.data.game
          };
          const date = newState.game.releaseDate || new Date();

          newState.game.releaseDate = moment(date).format('YYYY-MM-DD').toString();
          this.setState(newState);
        }
      });
    }
  }

  handleInputChange(field, value) {
    this.setState({
      game: {
        ...this.state.game,
        [field]: value
      }
    });
  }

  handleSubmit(e) {
    // TODO: Maybe this should move behind an abstraction layer
    let promise;
    let game = this.state.game;
    e.preventDefault();

    game.releaseDate = new Date(game.releaseDate);

    if (this.state.game._id) {
      promise = axios.patch('/api/game/add', this.state.game);
    } else {
      promise = axios.post('/api/game/add', this.state.game)
    }

    promise.then((res) => {
      // TODO: This should push to a different route depending on the
      // type of user who is adding a game.
      // /admin for admins, /game/:id otherwise?
      this.props.history.push('/admin');
    });
  }

  render() {
    const initialGame = this.state.game;

    return (
      <div className={cn('cp-add-game')}>
        <h1>Add a new game</h1>
        <form action="/game" method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => this.handleInputChange('title', e.target.value)}
              value={initialGame.title} />
          </div>

          <div className="form-row">
            <label htmlFor="developer">Developer</label>
            <input
              type="text"
              id="developer"
              onChange={(e) => this.handleInputChange('developer', e.target.value)}
              value={initialGame.developer} />
          </div>

          <div className="form-row">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              id="publisher"
              onChange={(e) => this.handleInputChange('publisher', e.target.value)} 
              value={initialGame.publisher} />
          </div>

          <div className="form-row">
            <label htmlFor="release-date">Release Date</label>

            {/*
                HEY. THIS HANDLING OF DATE DOESN'T WORK AS EXPECTED SINCE THE DATEPICKER
                RETURNS SOMETHING DIFFERENT THAN A UNIX TIMESTAMP
            */}

            <input
              type="date"
              id="release-date"
              onChange={(e) => this.handleInputChange('releaseDate', e.target.value) } 
              value={initialGame.releaseDate } />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              onChange={(e) => this.handleInputChange('description', e.target.value)} 
              value={initialGame.description} />
          </div>

          <input type="submit" value={initialGame._id ? "Edit game" : "Add game"} />
        </form>
      </div>
    );
  }
}

export default withRouter(AddEditGame);
