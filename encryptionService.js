const crypto = require('crypto')

module.exports = encryptionService = (key, string) => {
  const KEY = crypto.createCipher('aes-128-cbc', key)
  console.log('KEY', KEY)
  let encrypted_string = KEY.update(string, 'utf8', 'hex')
  encrypted_string += KEY.final('hex')
  console.log('ENCRYPTED TEXT IS', encrypted_string)
  return encrypted_string
}
