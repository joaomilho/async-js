const { create } = require('@most/create')
const fs = require('fs')
const { trim } = require('ramda')

const readFile = path =>
  create((add, end, error) => {
    fs.readFile(path, 'utf8', (err, content) => (err ? error(err) : add(content)))
  })

const algorithm = readFile('files/a.txt').chain(readFile).chain(readFile).chain(readFile)

algorithm.observe(console.log)
