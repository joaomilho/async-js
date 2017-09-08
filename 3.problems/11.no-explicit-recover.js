const fs = require('fs')

const readFileP = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      err ? reject(err) : resolve(content)
    })
  })

readFileP('files/a.txt')
  .then(content => readFileP(conten, 'utf8'))
  .then(content => readFileP(content, 'utf8'), () => 'files/c.txt')
  .then(content => readFileP(content, 'utf8'))
  .then(console.log)
  .catch(console.error)

console.log('GOT HERE!')
