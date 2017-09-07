const { task, waitAll } = require('folktale/concurrency/task')
const fs = require('fs')
const { mergeAll, map } = require('ramda')

const readFile = path =>
  task(({ resolve, reject }) => {
    fs.readFile(path, 'utf8', (err, content) => (err ? reject(err) : resolve(content)))
  })

const writeFile = path => content =>
  task(({ resolve, reject }) => {
    fs.writeFile(path, content, 'utf8', (err, content) => (err ? reject(err) : resolve(content)))
  })

const algorithm = readFile('files/index.json')
  .map(JSON.parse)
  .map(map(readFile))
  .chain(waitAll)
  .map(map(JSON.parse))
  .map(mergeAll)
  .map(JSON.stringify)
  .chain(writeFile('files/result.json'))

algorithm.run()
