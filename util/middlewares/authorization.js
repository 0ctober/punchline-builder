// const sha256 = require('js-sha256');
// const keys = require('../util/configuration')
module.exports = {
    schedulerAuth:(req, res, next)=>{
        console.log(c.red('\n[ schedulerAuth ]'));
        // console.log(req.body.hasOwnProperty('token') && req.body.token === "f767677b-d313-4f31-a867-dc3fc8485880");
        console.log(c.red('\n[ schedulerAuth ]'));
        next()
        // try {
        //     if(req.params.hasOwnProperty('KEY') && req.params.KEY === "f767677b-d313-4f31-a867-dc3fc8485880"){
        //         next()
        //     }else{
        //         res.status(404)
        //     }
        // } catch (error) {
        //     console.error(error);
        //     res.status(404)
        // }
    },
}