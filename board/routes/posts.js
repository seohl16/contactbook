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

// get /posts/new page , create post according to data /posts 
router.get('/new', function (req, res) {
	res.render('posts/new');
})

router.post('/', function (req, res) {
	Post.create(req.body, function(err, post){
		if (err) return res.json(err);
		res.redirect('/posts');
	});
});

module.exports = router;