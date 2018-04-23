// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4013270,
      from : '0x86e8aa51b4d29ee80d4fc9cd97375967ae743ed8'

    }
  }
}
