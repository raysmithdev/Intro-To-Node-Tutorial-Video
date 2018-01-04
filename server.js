const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./userModel')

mongoose.connect('mongodb://localhost:27017/intro-to-node-db')

app.get('/users', (req, res) => {
  User.find({}, (error, users) => {
    if(error) {
      res.send(error)
    } else {
      res.json(users)
    }
  })
})

app.post('/users', (req, res) => {
  const newUser = new User()

  newUser.name = 'James'
  newUser.email = 'james@test.com'

  newUser.save((error, user) => {
    if(error) {
      res.send(error)
    } else {
      res.json(user)
    }
  })
})

app.listen(8080, () => console.log('Server is up and running on PORT 8080'))
