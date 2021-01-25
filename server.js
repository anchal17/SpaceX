const express = require('express');
var favicon = require('serve-favicon')
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/space-x'));
app.use(favicon(__dirname + '/dist/favicon.ico'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/space-x/index.html'));});
app.listen(process.env.PORT || 8080);
