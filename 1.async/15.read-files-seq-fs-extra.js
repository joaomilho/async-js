const { readFile } = require('fs-extra')

readFile('files/a.txt', 'utf8')
  .then(content => readFile(content, 'utf8'))
  .then(content => readFile(content, 'utf8'))
  .then(content => readFile(content, 'utf8'))
  .then(console.log)
  .catch(console.error)

console.log('GOT HERE!')
