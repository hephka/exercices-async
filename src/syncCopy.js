import { COPYFILE_EXCL } from 'constants'
import fs from 'fs'

/* Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
 en utilisant les api synchrones du module fs de node.js */

fs.copyFileSync('./file1.txt', './file2.txt', COPYFILE_EXCL)
console.log('fichier file1.txt vers nouveau fichier file2.txt')
