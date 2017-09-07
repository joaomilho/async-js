const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve(secs) : reject(secs)), secs * 1000)
  })

Promise.race([wait(1), wait(2), wait(3), wait(4)])
  .then(console.log)
  .catch(error => console.error('Error:', error))
