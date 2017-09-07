const { task } = require('folktale/concurrency/task')

const wait = secs =>
  task(({ resolve }) => {
    setTimeout(() => resolve(secs), secs * 1000)
  })

wait(5)
