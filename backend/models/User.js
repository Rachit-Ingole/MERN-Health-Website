const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function getDate(){
let todaysDate = new Date();
let day = todaysDate.getDate();
let month = todaysDate.getMonth() + 1;
let year = todaysDate.getFullYear();
return `${day}/${month}/${year}`
}
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  balance:{
    type: Number,
    default:0
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  actions: { type: Number, default: 0 },
  lastActionDate: { 
    type: String,
    default: getDate()
  }
})

UserSchema.pre('save', async function (next) {
  if(!this.isModified("password")){return next();}
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (canditatePassword) {
  return await bcrypt.compare(canditatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)
