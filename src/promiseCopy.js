import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'

/* Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
 en utilisant les api asynchrones basées sur des promises du module fs de node.js. */

 fsPromises.copyFile('file1.txt', 'file2.txt', COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))