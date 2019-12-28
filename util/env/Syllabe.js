const app = {
    getVoyelles: ()=>{
        return [
            'a','à',
            'e','é','è', 'œ',
            'i','ï',
            'o','ö', 'ô',
            'u','û','ù','ü',
            'y'
        ]
    },

    getConsonnes: ()=>{
        return [
            'z','r','t','p','m','l','k','j','h',
            'g','f','d','n','s','q','w','x','c',
            'v','b',
        ]
    },
    getAlphabet: ()=>{
        return [
            'a','z','e','é','è', 'œ','r','t','y'
            ,'u','i','o','p','m','l','k','j','h'
            ,'g','f','d','n','s','q','w','x','c'
            ,'v','b',
        ]
    },
    isVoyelle: function(v){
        return this.getVoyelles().find((e)=>{
            return v === e
        }) ? true : false
    },
    isConsonne: function(v){
        return this.getConsonnes().find((e)=>{
            return v === e
        }) ? true : false
    },
    startWithConsonne: function(lettres){
        return this.isConsonne(lettres[0])
    },
    startWithVoyelle: function(lettres){
        return this.isVoyelle(lettres[0])
    },
    isDifferent: function(a, b){
        return this.isVoyelle(a) && this.isConsonne(b) 
        || this.isConsonne(a) && this.isVoyelle(b)
    },
    isSame: function(a, b){
        return this.isVoyelle(a) && this.isVoyelle(b) 
        || this.isConsonne(a) && this.isConsonne(b)
    },
    r1 : {  
        d:[  
            'et', 
            'é', 'ée', 'ées', 
            'ai', 'ais', 'ait', 'aient',
            'ez', 'er'
        ],f:null
    },
    r2 : {
        d:[
            'en', 'an'
        ],
        f:function(w, i){
            this.d
        }
    },
    r3 : {
        d:[
            'en', 'an'
        ],
        f:function(w, i){

            this.d
        }
    },
    /**
     * 
     * @param {String} newLetter 
     * @param {Array<Array<String>>} syllabes 
     * @param {Array} buffer 
     * @param {number} i 
     * @param {string} w 
     */
    isNewSyllabe: function(newLetter, syllabes, buffer, i, w){


            // Début du mot
            // startWithVoyelle = this.startWithVoyelle(l)
            // startWithConsonne = this.startWithConsonne(l)
            // if(startWithConsonne){
            // if(this.isSame(l, l_)){
            // if(this.isConsonne(l)){
            // if(end_of_syllabe)
        // let startWithVoyelle = this.startWithVoyelle(w)
        // let startWithConsonne = this.startWithConsonne(w)
        if(i<5){
            console.log('newLetter : ' + newLetter+  ', syllabes : ' + syllabes+  ', buffer : ' + buffer)
        }
        
        // On est sur la première syllabe
        if(buffer.length==0){
            /**
             * Buffer vide, on le rempli d'une lettre
             */
            buffer.push(newLetter)
            // if()
            return false
        }else if(syllabes.length == 0){
            /**
             * Première syllabe
             */
            if(buffer.length==1){
                if(this.startWithConsonne(w) && this.isConsonne(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else if(this.startWithVoyelle(w) && this.isVoyelle(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else if(this.startWithConsonne(w) && this.isVoyelle(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else if(this.startWithVoyelle(w) && this.isConsonne(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else{
                    // buffer.push(newLetter)
                    return true
                }
            }else{
                if(this.startWithConsonne(w) && this.isConsonne(newLetter)){
                    if(this.isSame(buffer[i-1], newLetter)){
                        buffer.push(newLetter)
                        return false
                    }else{
                        return true
                    }
                }else if(this.startWithVoyelle(w) && this.isVoyelle(newLetter)){
                    if(this.isSame(buffer[i-1], newLetter)){
                        buffer.push(newLetter)
                        return false
                    }else{
                        return true
                    }
                }else if(this.startWithConsonne(w) && this.isVoyelle(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else if(this.startWithVoyelle(w) && this.isConsonne(newLetter)){
                    buffer.push(newLetter)
                    return false
                }else{
                    if(this.bloquePhoneme(newLetter)){
                        return true
                    }
                    // buffer.push(newLetter)
                    return true
                }
                return this.isVoyelle(buffer[buffer.length-1])
            }
            // buffer.push(newLetter)
        }else if(i+1 == w.length){
            /**
             * Drnière syllabe
             */

            // Code ici ...

            buffer.push(newLetter)
            return true
        }else{
            buffer.push(newLetter)
            let j = 0
            if(i<5){
                console.log('buffer.length '+ buffer.length);
            }
            
            for (const lettre of buffer) {
                j++
                // On se trouve à la fin du mot
                if(i<5){
                    console.log('\tSlettre : '  +lettre);
                }
                if(i == w.length){
                    
                }
            }
            return this.isVoyelle(buffer[buffer.length-1])
        }
        // console.log(buffer[buffer.length-1])
    },
    // mots de minimum 2 lettres
    extractSyllabes: function(w){
        console.log('---------------------\nextractSyllabes()\n---------------------');
        console.log(w + ", len: " + w.length);
        let wl = w.length
        let newLetter = null
        let syllabes = []
        let buffer = []
        
        for(let i = 0; i < wl;i++){
            newLetter=w[i]
            if(this.isNewSyllabe(newLetter, syllabes, buffer, i, w)){
                syllabes.push(buffer.join(''))
                // if(syllabes.length == 1){
                    buffer = [w[i]]
                // }else{
                    // buffer = []
                // }
            }
        }
        return syllabes
    }
}
module.exports = app

console.log(app.isVoyelle('q'));
console.log(app.isVoyelle('a'));
console.log(app.isSame('a', 'e'));

/////
// Extraction de voyelle
/////

// console.log(app.extractSyllabes('ok'));
// console.log(app.extractSyllabes('manger'));
// console.log(app.extractSyllabes('avaler'));
// console.log(app.extractSyllabes('recracher'));
// console.log(app.extractSyllabes('kayak'));
console.log(app.extractSyllabes('anticonstitutionnellement'));

