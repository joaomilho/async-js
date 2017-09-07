const Parallel = require('paralleljs')

const p = new Parallel([0, 1, 2, 3, 4, 5, 6])

function fib(n) {
  return n < 2 ? 1 : fib(n - 1) + fib(n - 2)
}

p.map(fib).then(console.log)
