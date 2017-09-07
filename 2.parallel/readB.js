const fs = require('fs')

const b = fs.readFileSync('files/b.json', 'utf8')
process.send(b)
