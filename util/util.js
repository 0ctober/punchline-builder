const c = require('chalk')

module.exports = {
    debug : (response, result) => {
        let json = JSON.stringify(result, null, 2) // On stringify le resultat
        json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        response.send("<pre>" + json + "<pre>") // On retourne la réponse
        // response.send("<pre>" + result + "<pre>") // On retourne la réponse
    },
    error : (r, e) => {
        console.log('[ ]' + c.red(' ERROR TRACE'))
        console.log(e)
        console.log('----------------------------')
        console.log(r)
        console.log('[ ]' + c.red(' END TRACE'))
    },
    prod : (response, result) => {
        // if (result.error) error(response, result.error)
        response.send(result)
    },
    print : (message) => {
        console.log('[ ' + c.red('API') + ' ] : ' + c.green(message))
    }
}