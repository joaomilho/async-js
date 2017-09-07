const fs = require('fs')

fs.readFile('files/a.txt', 'utf8', (err, content) => {
  if (err) throw new Error(err)

  console.log(content)
})

console.log('GOT HERE')
