const { map, invoker } = require('ramda')
const { fromNullable } = require('folktale/maybe')

const order = {
  user: null,
}

const getUserName = () =>
  Promise.resolve(order)
    .then(order => fromNullable(order.user))
    .then(map(({ givenName, familyName }) => `${givenName} ${familyName}`))
    .then(fullName => fullName.getOrElse('Anonymous'))

getUserName().then(console.log)
