const mongoose = require("mongoose");
const { Schema } = mongoose;
// const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
	googleId: String,
	githubId: String,
	age: Number,
});

mongoose.model('users', userSchema);
