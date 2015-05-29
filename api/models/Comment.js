/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    body: {
      type: "text",
      required: true
    },

    //// associations ////

    // this is a "belongs to Post"
    post: {
      model: "Post"
    },

    // this is a "belongs to User"
    user: {
      model: "User"
    }
  }
};

