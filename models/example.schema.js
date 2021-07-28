const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
    exampleTitle: String,
    exampleDescription: String
}, {
    timestamps: true
});

module.exports = mongoose.model('examples', exampleSchema);