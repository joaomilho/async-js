const cp = require('child_process')
const { map, mergeAll } = require('ramda')

const readA = cp.fork('./2.parallel/readA.js')
const readB = cp.fork('./2.parallel/readB.js')
const readC = cp.fork('./2.parallel/readC.js')

const getFileContent = proc =>
  new Promise((resolve, reject) => {
    proc.on('message', resolve)
  })

Promise.all([getFileContent(readA), getFileContent(readB), getFileContent(readC)])
  .then(map(JSON.parse))
  .then(mergeAll)
  .then(console.log)
