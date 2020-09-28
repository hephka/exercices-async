import { COPYFILE_EXCL } from "constants"
import fs from "fs"

/* Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
 en utilisant les api asynchrones basées sur des callbacks du module fs de node.js. */

 const callback = (e) => {
     if (e) throw e
     console.log('source.txt was copied to destination.txt')
 }

fs.copyFile('./file1.txt', './file2.txt', COPYFILE_EXCL, callback)
