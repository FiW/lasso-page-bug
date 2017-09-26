require('marko/node-require');
require('marko/express');
require('lasso').configure({plugins: ['lasso-marko']});

var app = require('express')();

app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./pages/home'));

app.listen(3000);
