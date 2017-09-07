const { readFile } = require('fs-extra')

const readAll = async () => {
  const content1 = await readFile('files/a.txt', 'utf8')
  const content2 = await readFile(content1, 'utf8')
  const content3 = await readFile(content2, 'utf8')
  const content4 = await readFile(content3, 'utf8')
  console.log(content4)
}

readAll()
console.log('GOT HERE!')
