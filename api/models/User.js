/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: {

      // email is built-in type in Waterline
      type: "email",
      required: true,
      unique: true
    },

    firstName: {
      type: "string"
    },

    lastName: {
      type: "string"
    },

    password: {
      type: "string",
      minLength: 6,
      required: true
    },

    //// associations ////

    // this is a "has many Comment"
    comments: {
      collection: "Comment",
      via: "user"
    },

    // example
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    // built-in method to override JSON showing password
    // gets called whenever object is converted to JSON
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(values, callback) {

    // salt is 10 digits
    bcrypt.hash(values.password, 10, function(err, hash) {

      // callback with error
      if (err) return callback(err);

      values.password = hash;

      // callback without arguments is success;
      callback();
    });
  }

};

