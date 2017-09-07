const Promise = require('bluebird')

Promise.config({ cancellation: true })

const wait = secs =>
  new Promise((resolve, reject, onCancel) => {
    const timer = setTimeout(
      () => (Math.random() > 0.5 ? resolve(secs) : reject(secs)),
      secs * 1000
    )

    onCancel(() => clearTimeout(timer))
  })

const promises = [wait('1', 1), wait('2', 2), wait('3', 3), wait('4', 4)]
Promise.any(promises).then(result => {
  promises.map(promise => promise.cancel())
  console.log(result)
})
