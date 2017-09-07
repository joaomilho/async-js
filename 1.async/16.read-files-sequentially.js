const { readFile } = require('fs-extra')

const sequentially = list =>
  list.reduce((promise, fn) => {
    return promise.then(fn)
  }, Promise.resolve())

sequentially([
  () => readFile('files/a.txt', 'utf8'),
  content => readFile(content, 'utf8'),
  content => readFile(content, 'utf8'),
  content => readFile(content, 'utf8'),
])
  .then(console.log)
  .catch(console.error)

console.log('GOT HERE!')
