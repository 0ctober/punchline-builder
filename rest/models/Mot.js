'use strict'
/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/**
 * SCHEMA
 */ 
const MotSchema = new Schema({
    _id:{type:ObjectId, default : null},
        ortho: {type:String, default:null},
        phon: {type:String, default:null},
        cgram: {type:String, default:null},
        genre: {type:String, default:null},
        nombre: {type:String, default:null},
        freqlemlivres: {type:Number, default:null},
        freqfilms2: {type:Number, default:null},
        freqlivres: {type:Number, default:null},
        infover: {type:Number, default:null},
        nbhomogr: {type:Number, default:null},
        nbhomoph: {type:Number, default:null},
        islem: {type:Number, default:null},
        voisorth: {type:Number, default:null},
        voisphon: {type:Number, default:null},
        syll: {type:String, default:null},
        nbsyll: {type:Number, default:null},
        "cv-cv": {type:String, default:null},
        orthrenv: {type:String, default:null},
        phonrenv: {type:String, default:null},
        orthosyll: {type:String, default:null},
        cgramortho: {type:String, default:null},
        nbmorph: {type:Number, default:null}
})
// phon: 1,// cgram: 0,// genre: 0,// nombre: 1,// freqlemlivres: 1,// freqfilms2: 1,// freqlivres: 1,
// infover: 1,// nbhomogr: 1,// nbhomoph: 0,// voisorth: 1,// voisphon: 1,// nbsyll: 1,// "cv-cv": 1,
// orthrenv: 1,// phonrenv: 1,// orthosyll: 1,// cgramortho: 1,// nbmorph: 1,

MotSchema.statics = {
    playground : async function(mot='antichambre'){
        if(typeof mot == "string" && mot != ""){
            const words = await this.findOne({ortho:mot}, {syll: 1, ortho: 1,islem: 1,}).exec()
            let result = null
            console.log(words)
            if(words){
                console.log('------------ motQuiRimeAvec ------------');
                result = this.motQuiRimeAvec(words, 1, 1)
                console.log('------------ motQuiRimeAvec ------------');
                return  result
            }
        }
        return {}
    },
    /**
     * Autocomplete un mot en ajoutant un suffixe
     * @param {String} _suffixe
     * @api private
     */
    motQuiRimeAvec: async function(_suffixe, nbSyllabesSuffixe=1, nbSyllabesPrefixe=1) {

        const syllabesPhon = _suffixe.syll.split('-')
        console.log("syllabesPhon : " + syllabesPhon);
        
        let subMatch = ""
        let i = syllabesPhon.length-1
        while(((i>-1 )&& nbSyllabesSuffixe != 0)){
            console.log(' i : ' + i);
            subMatch = subMatch.length ? syllabesPhon[i]+'-'+subMatch:syllabesPhon[i]
            i--
            nbSyllabesSuffixe--
        }
        console.log('subMatch : ' + subMatch);

        let subMatchPrefixe = ""
        i = 0
        while((i<syllabesPhon.length-1) && (nbSyllabesPrefixe != 0)){
            console.log(' i : ' + i);
            subMatchPrefixe = subMatchPrefixe.length ? subMatchPrefixe+'-'+syllabesPhon[i]:syllabesPhon[i]
            i++
            nbSyllabesPrefixe--
        }

        console.log('subMatchPrefixe : ' + subMatchPrefixe);
        let suffixe = new RegExp(subMatch+'$')
        let preffixe = new RegExp('^'+subMatchPrefixe)
        let x = await this.find({
            $and:[
                {'syll':{'$regex' :preffixe, '$options' : 'i'}},
                {'syll':{'$regex' :suffixe, '$options' : 'i'}}
            ]
        }, {syll: 1, ortho: 1,islem: 1,}).exec()
        console.log("LOAD-");
        console.log(x);
        return x
    },
}

MotSchema.methods = {
    findOne : async(x)=>{
        return this.findOne({"word":'vraiment'}).exec()
        // return 'bonjour'
    }
}

mongoose.model('Mot', MotSchema)

// Word.statics = {

//     /**
//      * Autocomplete un mot en ajoutant un suffixe
//      * @param {String} _suffixe
//      * @api private
//      */
//     load_: async(_suffixe)=> {

//         let prefix = new RegExp('^'+_suffixe)
//         let x = this.findOne().exec()

//         console.log(x);
//         return x
//             // this.find({'word':{'$regex' :prefix, '$options' : 'i'}},{'_id':0,'word':1})
//             // .exec()
//     },
//     load:(_suffixe)=>{
//         return this.model('allwords').find({})
//     }
// }
  
//     /**
//      * List articles
//      *
//      * @param {Object} options
//      * @api private
//      */
  
//     list: function (options) {
//       const criteria = options.criteria || {};
//       const page = options.page || 0;
//       const limit = options.limit || 30;
//       return this.find(criteria)
//         .populate('user', 'name username')
//         .sort({ createdAt: -1 })
//         .limit(limit)
//         .skip(limit * page)
//         .exec();
//     }
//   };