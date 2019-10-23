const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const postSchema = new Schema({
	title: { type: String, required: true },
	pictures: [String],
	body: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now },
	hidden: { type: Boolean, required: true, default: false },
	// comments: [{ body: String, date: Date }],
	// meta: { votes: Number, favs:  Number },
	toDisplay: {
		homepage: Boolean,
		news: Boolean,
		teams: { type: [String], index: true },
		competitions: { type: [String], index: true }
	},
	tags: { type: [String], index: true }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);;