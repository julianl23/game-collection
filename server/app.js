const config = require('config');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Route Handlers
const GameRoutes = require('./routes/api/game');
const SessionRoutes = require('./routes/api/session')

// Models
const Game = require('./models/Game');
const User = require('./models/User');

// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/game-collection', function(error) {
  if (error) {
    console.log(error);
  }
});
// const db = mongoose.connection;

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

// Passport
app.use(expressSession({
  secret: config.get('secret'),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Routes
app.route('/api/game/:id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(GameRoutes.get)
  .post(GameRoutes.post)
  .delete(GameRoutes.deleteGame);

app.route('/api/games')
  // TODO: Does this route name make sense? Should Game.get just handle requests without an ID instead?
  .get((req, res) => {
    Game.find({}, function(err, games) {
      if (err) {
        res.status(500).json({
          error: true,
          message: err
        });
      } else {
        res.status(200).json({
          games: games
        });
      }
    });
  });

app.route('/api/register')
  .post((req, res) => {
    const newUser = new User({ username : req.body.username, name: req.body.name });
    User.register(newUser, req.body.password, function(err, user) {
      if (err) {
        res.json({
          error: true,
          message: err
        });
      }

      passport.authenticate('local')(req, res, function () {
        res.json({
          user,
          message: 'User created'
        });
      });
    });
  });

app.route('/api/login')
  .post((req, res) => {
    passport.authenticate('local')(req, res, function () {
      res.json({});
    });
  });

app.route('/api/session')
  .get(SessionRoutes.get);

// Always return the main index.html, so react-router render the route in the client
// NOTE: This isn't used right now, and webpack/create-react-app is handling serving the static page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
