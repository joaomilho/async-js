const { map } = require('ramda')
const Maybe = require('folktale/maybe')

const order = {
  user: null,
}

Promise.resolve(order)
  .then(order => Maybe.fromNullable(order.user))
  .then(map(({ givenName, familyName }) => `${givenName} ${familyName}`))
  .then(fullName => fullName.getOrElse('Anonymous'))
  .then(console.log)
  .catch(err => console.error('Error: ', err))
