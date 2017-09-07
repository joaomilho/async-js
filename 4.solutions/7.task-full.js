const { task } = require('folktale/concurrency/task')
const fs = require('fs')
const { trim } = require('ramda')

const readFile = path =>
  task(({ resolve, reject }) => {
    fs.readFile(path, 'utf8', (err, content) => (err ? reject(err) : resolve(content)))
  })

const algorithm = readFile('files/a.txt').chain(readFile).chain(readFile).chain(readFile)

algorithm.map(console.log).run()
