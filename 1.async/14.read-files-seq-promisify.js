const fs = require('fs')
const { promisify } = require('util')
const readFileP = promisify(fs.readFile)

readFileP('files/a.txt', 'utf8')
  .then(content => readFileP(content, 'utf8'))
  .then(content => readFileP(content, 'utf8'))
  .then(content => readFileP(content, 'utf8'))
  .then(console.log)
  .catch(console.error)

console.log('GOT HERE!')
