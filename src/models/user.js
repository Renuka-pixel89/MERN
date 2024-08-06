const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    deptid: Number
});

module.exports = mongoose.model('User', UserSchema);
