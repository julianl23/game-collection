import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

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

    // Parse response

    // Validate it

    // Check mongoose if it exists?

    // Save or update

    // Return the model in the response

    res.status(201).json({
      game: {
        title: req.body.title,
        developer: req.body.developer,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        description: req.body.description
      }
    });
  });

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
