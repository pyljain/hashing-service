const crypto = require('crypto')

const decryptionService = (key, string) => {
  try {
    let mykey = crypto.createDecipher('aes-128-cbc', key)
    console.log('MYKEY', mykey)
    let myStr = mykey.update(string, 'hex', 'utf8')
    console.log('CURRENT STRING', myStr)
    myStr += mykey.final('utf8')
    console.log('DECRYPTED STRING IS', myStr)
    return myStr

  } 
  catch(e) {
    console.error(e)
    return 'Error'
  }

}

module.exports = decryptionService