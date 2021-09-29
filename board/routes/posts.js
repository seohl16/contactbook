//routes/posts.js

var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

router.get('/', function (req, res) {
	Post.find({})
	.sort('-createdAt')
	.exec(function(err, posts){
		if (err) return res.json(err);
		res.render('posts/index', {posts:posts});
	});
});

module.exports = router;