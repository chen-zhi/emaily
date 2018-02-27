const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userScheme = new Schema({
	googleId: String
});

mongoose.model('users', userScheme);