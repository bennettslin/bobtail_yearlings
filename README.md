# bobtail_yearlings

a [Sails](http://sailsjs.org) application

Steps for basic app

Prepare new app
===============
* sails new bobtail_yearlings
* npm install --save sails-mongo
* npm install --save bcrypt
* touch .nodemonignore, add .tmp and assets
* sails generate controller page
* sails generate controller auth
* sails generate controller chat

Create entity-relationship model
================================
* sails generate api post (model and controller)
* sails generate api comment
* sails generate api user

Config settings
===============
* blueprints.js, add prefix: '/api'
* connections.js, name mongo server and database
* models.js, name server connection and set migrate option
* routes.js

Controllers
===========

Model
=====

View
====
* layout.ejs, include all links and scripts, and move to head

