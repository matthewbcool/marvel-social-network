const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

router.get('/me', auth, async (req, res) => {
  try {
    //maybe instead of populating from user the photo comes from the profile schema?
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    )

    if (!profile) {
      return res.status(400).json({ msg: 'no profile for this user' })
    }
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('server error')
  }
})

module.exports = router
