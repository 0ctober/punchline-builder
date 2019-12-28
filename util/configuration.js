const octopush = require('octopush').constants


module.exports = {
    /**
     * MANGOPAY API 2.0.1
     */
    MANGO_API_INFOS : {
        clientId: 'doof',
        clientPassword: 'nPoiztuv9zb93mkgUUzhYofCMjHUNOOQC4mcZ6hUCqbfAuBSWv'
    },
    /**
     * GOOGLEMAP
     */
    GOOGLE_MAP_API_INFOS : {
        provider: 'google',
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyBJCTr1qrtjz3UB3LhCAJJb0eP2c1266JY',
        formatter: null   
    },
    OCTOPUSH_SMS_INFOS : {
        user_login: 'yann@doofapp.fr',
        api_key: '6XEKBchg1GpTQC9RqTbu1gpiButqQKXy',
        sms_recipients: [],
        sms_text: '',
        sms_type: octopush.SMS_STANDARD,
        sms_mode: octopush.INSTANTANE,
        sms_sender: 'Doof'
    },
    schedulerAuth:{
        KEY:'f767677b-d313-4f31-a867-dc3fc8485880',
        PATH:'http://127.0.0.1:3000/payoutScheduler'
    }
    // /**
    //  * OVH API
    //  */
    // OVH_API_INFOS : {
    //     appKey: 'RnZw40acRSMEOCAK',
    //     appSecret: 'W9fSV8URaECze2aoCs1jyfB9WJVvy2w5',
    //     consumerKey: 'bQBJKym7z1wb3T1RER9syJx9gHDonfZY'
    // }
}