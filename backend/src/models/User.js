const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
  email: String
})

module.exports = mongoose.model('User', UserSchema)