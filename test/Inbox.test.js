const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

let fetchedAccounts

beforeEach( async () => {
    fetchedAccounts = await web3.eth.getAccounts()
})

describe('a',() => {
    it('a minor', () => {
        console.log(fetchedAccounts)
    })
})