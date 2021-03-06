const { task, waitAny } = require('folktale/concurrency/task')

const wait = secs =>
  task(({ resolve, cleanup }) => {
    const timer = setTimeout(() => resolve(secs), secs * 1000)

    cleanup(() => clearTimeout(timer))
  })

const execution = waitAny([wait(1), wait(2)]).map(console.log).run()
