const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  bio: {
    type: String
  },
  photo: {
    type: String
  }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
