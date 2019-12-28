const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);

module.exports = {

    /**
     * @param dataBase64 { String }
     * @param name { String }
     * @param directory { String }
     * @returns uri { String }
     */
    save:async (dataBase64, name, directory='/public/images/')=>{
        let error = false
        /**
         * Nom de l'image
         */
        let short_name = name + '.jpg'
        /**
         * Chemin complet de l'image
         */
        let full_path = appRoot + directory + short_name
        /**
         * donnée à supprimer au début du fichier en base64
         */
        dataBase64 = dataBase64.replace("data:image/jpeg;base64,", "")
        /**
         * Écriture du fichier
         */
        try {
            await writeFile(full_path, dataBase64, 'base64')
        } catch (e) {
            console.error(JSON.stringify(e))
            error = true
        }
        /**
         * deployMode = { doofapp.fr:3000 || 127.0.0.1:3000 }
         */
        return error ? "" : deployMode + '/images/' + short_name
    }

}