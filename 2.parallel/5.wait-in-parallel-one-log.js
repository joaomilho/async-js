const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(secs), secs * 1000)
  })

const promises = [wait(4), wait(1), wait(3), wait(2)]

Promise.all(promises).then(console.log)
