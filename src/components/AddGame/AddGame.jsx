import axios from 'axios';
import React, { Component } from 'react';
import cn from 'classnames';

class AddGame extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      developer: '',
      publisher: '',
      releaseDate: null,
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleSubmit(e) {
    // TODO: Maybe this should move behind an abstraction layer

    e.preventDefault();
    axios.post('/api/game/add', this.state)
      .then((res) => {
        // TODO: This should redirect you to the game's actual page
        console.log(`game added! ${res}`)
      });
  }

  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className={cn('cp-add-game')}>
        <h1>Add a new game</h1>
        <form action="/game" method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => this.handleInputChange('title', e.target.value)} />
          </div>

          <div className="form-row">
            <label htmlFor="developer">Developer</label>
            <input type="text" id="developer" onChange={(e) => this.handleInputChange('developer', e.target.value)} />
          </div>

          <div className="form-row">
            <label htmlFor="publisher">Publisher</label>
            <input type="text" id="publisher" onChange={(e) => this.handleInputChange('publisher', e.target.value)} />
          </div>

          <div className="form-row">
            <label htmlFor="release-date">Release Date</label>
            <input type="date" id="release-date" onChange={(e) => this.handleInputChange('releaseDate', e.target.value)} />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={(e) => this.handleInputChange('description', e.target.value)} />
          </div>

          <input type="submit" value="Add game" />
        </form>

        <div>
          <h2>Test bed</h2>
          <p>
            Title: { this.state.title }
          </p>
          <p>
            Developer: { this.state.developer }
          </p>
          <p>
            Publisher: { this.state.publisher }
          </p>
          <p>
            Release Date: { this.state.releaseDate }
          </p>
          <p>
            Description: { this.state.description }
          </p>
        </div>
      </div>
    );
  }
}

export default AddGame;
