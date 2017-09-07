const { map } = require('ramda')
const Maybe = require('folktale/maybe')

const order = {
  user: undefined,
}

Promise.resolve(order)
  .then(order => order.user)
  .then(({ givenName, familyName }) => `${givenName} ${familyName}`)
  .then(console.log)
  .catch(err => console.error('Error: ', err))
