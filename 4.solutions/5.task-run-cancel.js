const { task } = require('folktale/concurrency/task')

const wait = secs =>
  task(({ resolve, cleanup }) => {
    const timer = setTimeout(() => resolve(secs), secs * 1000)

    cleanup(() => clearTimeout(timer))
  })

const execution = wait(2).map(console.log).run()
execution.cancel()
