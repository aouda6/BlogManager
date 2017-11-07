var mongoose = require('mongoose');
var express = require('express');
var app = express();

var posts = require('./routes/posts');
var comments = require('./routes/comments');

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});
//app.use(express.static('public'));

app.use('/posts', posts);
app.use('/comments', comments);

mongoose.connect('mongodb://localhost/blogPost', { useMongoClient: true });

app.listen(3700, function () {
    console.log('The Start-up server is listening on port 3700');
});
