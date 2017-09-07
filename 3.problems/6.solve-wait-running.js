const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(secs), secs * 1000)
  })

const wrappedPromises = [
  () => wait(1).then(console.log),
  () => wait(2).then(console.log),
  () => wait(3).then(console.log),
  () => wait(4).then(console.log),
]

Promise.all(wrappedPromises.map(wrappedPromise => wrappedPromise()))
