import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

/* Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
 en utilisant les api asynchrones basées sur des promises du module fs de node.js. */

 /*     Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:

un fichier source, qui est le fichier à copier
un fichier dest, qui sera la destination de la copie
Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js. */

let source = process.argv[2]
let dest = process.argv[3]

if (process.argv.length !== 4) {
    console.log('Usage : node promiseCopy.js source dest')
    process.exit
}

 fsPromises.copyFile(source, dest, COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))
