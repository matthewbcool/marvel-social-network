const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
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

router.post('/', auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { name, bio, photo } = req.body
  const profileFields = {}
  profileFields.user = req.user.id
  if (name) profileFields.name = name
  if (bio) profileFields.bio = bio
  if (photo) profileFields.photo = photo

  try {
    let profile = await Profile.findOne({ user: req.user.id })
    if (profile) {
      await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      )
      return res.json(profile)
    }
    profile = new Profile(profileFields)
    await Profile.save()
    res.json(profile)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
