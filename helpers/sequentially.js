const sequentially = list =>
  list.reduce((promise, fn) => {
    return promise.then(fn)
  }, Promise.resolve())

module.exports = sequentially
