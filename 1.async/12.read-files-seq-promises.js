const fs = require('fs')

const readFileP = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      err ? reject(err) : resolve(content)
    })
  })

readFileP('files/a.txt')
  .then(content => readFileP(content))
  .then(content => readFileP(content))
  .then(content => readFileP(content))
  .then(console.log)

console.log('GOT HERE!')
