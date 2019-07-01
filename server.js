const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Parse = require('parse/node');

require('dotenv').config();

const app = express();
const router = require('./routes');

// Body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());

// Install Parse SDK
Parse.initialize(`${process.env.APP_ID}`, `${process.env.JS_KEY}`, `${process.env.MASTER_KEY}`);
Parse.serverURL = 'https://parseapi.back4app.com/';


// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', router);

const port = process.env.PORT || 5000;

// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join((__dirname = 'client/build/index.html')));
  });
}

// Build
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}client/public/index.html`));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
