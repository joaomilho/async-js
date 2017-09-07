const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve(secs) : reject(secs)), secs * 1000)
  })

Promise.all([wait('1', 1), wait('2', 2), wait('3', 3), wait('4', 4)])
  .then(console.log)
  .catch(error => console.error('Error:', error))
