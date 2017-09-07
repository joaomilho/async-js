setTimeout(() => console.log('A'), 0)
console.log('B')
setTimeout(() => {
  i = 0
  while (i < 2000000000)
    i++
}, 0)
console.log('C')
