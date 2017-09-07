const fs = require('fs')

const content1 = fs.readFileSync('files/a.txt', 'utf8')
const content2 = fs.readFileSync(content1, 'utf8')
const content3 = fs.readFileSync(content2, 'utf8')
const content4 = fs.readFileSync(content3, 'utf8')

console.log(content4)
console.log('GOT HERE')
