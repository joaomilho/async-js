const fs = require('fs')
const async = require('async')

const result = async.waterfall(
  [
    callback => fs.readFile('files/a.txt', 'utf8', callback),
    (content, callback) => fs.readFile(content, 'utf8', callback),
    (content, callback) => fs.readFile(content, 'utf8', callback),
    (content, callback) => fs.readFile(content, 'utf8', callback),
  ],
  (err, result) => {
    if (err) console.error(err)
    console.log(result)
  }
)
