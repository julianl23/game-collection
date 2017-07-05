const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
var express = require('express');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Support JSON-encoded bodies
app.use(bodyParser.json());

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.route('/api/game/:id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get((req, res) => {
    res.json({
      game: {
        title: req.params.id
      }
    });
  })
  .post((req, res) => {

    mongoose.connect('mongodb://localhost/game-collection');
    const db = mongoose.connection;

    // TODO: Is there a promise architecture that can be used here?

    // Error out response on error
    db.on('error', () => {
      console.error.bind(console, 'connection error:');
      res.status(500).json({
        error: true,
        message: 'connection error'
      });
    });
    db.once('open', function() {
      // we're connected!

      //Define a schema

      // TODO: Can you import this from the Node package?
      const Schema = mongoose.Schema;

      const GameSchema = new Schema({
        idea           : Schema.Types.ObjectId,
        title          : String,
        developer      : Date,
        publisher      : String,
        releaseDate    : Date,
        description    : String,
        created        : Date,
        edited         : Date
      });

      const Game = mongoose.model('Game', GameSchema);

      // Parse response
      const postedGame = {
        title: req.body.title,
        developer: req.body.developer,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        description: req.body.description
      };

      const gameInstance = new Game(postedGame);

      // TODO: How are updates handled in Mongoose?

      gameInstance.save(function (err, gameInstance) {
        if (err) {
          res.status(500).json({
            error: true,
            message: err
          })
        }

        res.status(201).json({
          game: gameInstance
        });
      });
    });
  });

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
