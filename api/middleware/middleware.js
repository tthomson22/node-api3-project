const User = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  const method = req.method
  const url = req.originalUrl
  const timeStamp = new Date().toLocaleString()
  console.log(`${method}, ${url}, ${timeStamp}`)
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
}