var app = require('express')()
  , http = require('http')
  , finalhandler = require('finalhandler')
  , serveStatic = require('serve-static');

app.use(serveStatic('./'));
app.listen(3020);
