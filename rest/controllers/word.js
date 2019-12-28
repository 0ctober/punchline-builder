'use strict'

let mongoose = require('mongoose')
const s = require('../../util/util')
const c = require('chalk')

require('../models/Mot')

const Mot = mongoose.model('Mot')

let ObjectId = mongoose.Schema.Types.ObjectId


module.exports = {
    playground: async(req, res, next) => {
        console.log(c.red('HELLO WORLD'));
        try {
            console.log('\treq.body.mot');
            console.log(req.body.mot);
            
            
            let mot = await Mot.playground(req.body.mot)
            console.log("PLAYGROUND");

            res.status(200).send(mot)
        } catch (error) {   
            console.error(error);
            res.status(200).send({error: 'Erreur interne',})
        }
    },
}