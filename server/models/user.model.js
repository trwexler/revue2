const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First name is required"] 
    },
    lastName: { 
        type: String,
        required: [true, "Last name is required"] 
    },
    email: { 
        type: String,
        required: [true, "Email name is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
    },
    password: { 
        type: String,
        required: [true, "Password is required"],
        minlength: [ 8, "Password must be 8 characters or longer"]
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {console.log(err)})
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
