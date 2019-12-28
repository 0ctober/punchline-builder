const c = require('chalk')
const config = require('../configuration').OCTOPUSH_SMS_INFOS
const octopush = require('octopush')
const sha256 = require('js-sha256')
const util = require('util')
module.exports = {

    sendSms: (number, body, callback)=>{
        console.log(c.yellow('\n[SMS]\n'));
        console.log('number : ' + number);
        console.log('body : ' + body+'\n');

        let sms = new octopush.SMS(config.user_login, config.api_key);
        sms.set_sms_recipients([number])
        sms.set_sms_text(body)
        /**
         * [ STEP 1 ] Vérifier les crédits FR
         */
        console.log(c.red('Balance check'))
        sms.get_balance(function(e, r){
            console.log("CR2DIT RESTANT");
            console.log(parseFloat(r.octopush.balance.FR));
            if(parseFloat(r.octopush.balance.FR)>=0.5){
                let numParsed = parseNumber(number)
                console.log('numParsed');
                console.log(numParsed);
                // sms.send(function(e, r){
                //     if(e) callback(false)
                //     else callback(true)
                //     console.log(r);
                // });
                callback(true)
            }else{
                throw new Error("Le crédit d'envoie de sms est épuisé")
            }
        })
    }
}
// sendSms('0666237418', 'votre nouveau mot de passe est : trolololo', (success)=>{
//     if(!success) console.log("Une erreur s'est produite.")
//     else console.log("TOUT EST OK")
// })
/**
 * @description change 06/07 en 00336
 * @param {String} number 
 */
let parseNumber = (number)=>{
    let formatted = null
    if(typeof number === 'string' && number.length == 10){
        formatted = '+33' + number.substr(1,9)
    }
    return  formatted
}
