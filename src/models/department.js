const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    did: mongoose.Schema.Types.ObjectId,
    dname: String
});

module.exports = mongoose.model('Department', DepartmentSchema);