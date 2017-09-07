const wait = (text, secs) =>
  new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve(text) : reject(text)), secs * 1000)
  })

module.exports = wait
