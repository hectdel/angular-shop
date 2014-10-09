var mongoose = require('mongoose');

module.exports = mongoose.model('accounts', {
    name : String,
    email : String,
    user: String,
    country: String
});