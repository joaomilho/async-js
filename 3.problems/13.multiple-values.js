const wait = secs =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(secs), secs * 1000)
    // ^ how do you replace this with setInterval?
  })
