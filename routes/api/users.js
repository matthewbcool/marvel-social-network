const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')
router.post(
  '/',
  [
    check('email', 'Please enter an email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('heroId', 'Please use a valid heroId').isLength({ min: 7 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password, heroId } = req.body
    try {
      let user = await User.findOne({ email })

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }
      //check if user exist
      // if exist send error
      // Get user gravatar?

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      })

      user = new User({
        name,
        email,
        avatar,
        password,
        heroId
      })
      // encrypt pass using bcrypt
      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      // return JWT
      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err
          return res.json({ token })
        }
      )
      await user.save()
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }

    res.send('User registered')
  }
)

module.exports = router
