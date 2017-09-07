const most = require('most')

const subscription = most.periodic(2000, 'a').observe(console.log)

subscription.unsubscribe()
