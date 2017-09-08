const most = require('most')

most.periodic(1000, 'hello!').take(5).observe(console.log)
