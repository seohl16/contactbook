//models/Post.js

var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	title:{type:String, required:true}, 
	body:{type:String, required:true}, 
	createdAt:{type:Date, dafult:Date.now}, 
	updatedAt:{type:Date}, 
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;