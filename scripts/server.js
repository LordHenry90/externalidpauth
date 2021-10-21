// Simple Express server setup to serve the build output
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;
const DIST_DIR = './dist';

app.use(cors())

app.options('*', cors())

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Accept, Authorization, Content-Type, X-Requested-With, Range,append,delete,entries,foreach,get,has,keys,set,values',
  exposedHeaders: 'Content-Length',
  preflightContinue : true,
  optionsSuccessStatus: 200
}));

app.get("/oauth2/userinfo", cors(), (req, res) => {
  console.info("GET /simple-cors");
  res.json({
    text: "Simple CORS requests are working. [GET]"
  });
});
app.use(function (req, res, next) {
	res.header("Content-Security-Policy","connect-src 'self' https://notaroenrico-dev-ed.my.salesforce.com/")
  next();
});
/*app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "*");
  res.header("Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header("Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range,append,delete,entries,foreach,get,has,keys,set,values");
	res.header("Content-Security-Policy","connect-src 'self' https://notaroenrico-dev-ed.my.salesforce.com/")
  next();
});*/

app.use(express.static(DIST_DIR));

app.use('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () =>
    console.log(`✅  Server started: http://${HOST}:${PORT}`)
);
