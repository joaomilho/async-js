const fs = require('fs')

const c = fs.readFileSync('files/c.json', 'utf8')
process.send(c)
