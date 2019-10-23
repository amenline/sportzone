const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
	},
	register_date: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: true,
});

module.exports = mongoose.model('User', userSchema);