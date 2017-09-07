requestAnimationFrame(() => console.log('A'))
console.log('B')

i = 0
while (i < 2000000000)
  i++

console.log('C')
