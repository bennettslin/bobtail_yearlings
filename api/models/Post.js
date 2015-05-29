/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title: {
      type: "string",

      // validations
      required: true
    },

    body: {
      type: "text",
      required: true
    },

    //// associations ////

    // this is a "has many Comment"
    comments: {

      // the other model
      collection: "Comment",

      // what we call the other association
      via: "post"
    }
  }
};

