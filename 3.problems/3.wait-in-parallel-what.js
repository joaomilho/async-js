const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(secs), secs * 1000)
  })

const promises = [
  wait(1).then(console.log),
  wait(2).then(console.log),
  wait(3).then(console.log),
  wait(4).then(console.log),
]

// what?
