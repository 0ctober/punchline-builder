/**
* @DESCRIPTION
* 
* Scheduler for payouts operations.
* Run every 24H.
*/
const schedule = require('node-schedule')
const moment = require('moment')
const c = require('chalk')
moment.locale('fr')
const superagent = require('superagent');
require('./authorization')
const scheduler = {
    init:async function(){
        this.runPayoutJob()    
    },
    runPayoutJob:async function(){
        console.log(c.green(' [ SCHEDULER STARTED ]'))
        const j = schedule.scheduleJob('*/15 * * * * *', async function(fireDate){
            console.log('[ Scheduler TIC ]');
            let postData = {
            }              
            try {
                let response = await superagent
                .post("localhost:3000/scheduler/payouts/f767677b-d313-4f31-a867-dc3fc8485880")
                .set('Content-Type', 'application/json')
                .send(postData) // sends a JSON post body
                console.log(response.text);
            } catch (error) {
                console.error(error);
                throw error
            }
        })
    }
}


if(process.argv.length === 3 && process.argv[2] === '-alone'){
    scheduler.init()
}