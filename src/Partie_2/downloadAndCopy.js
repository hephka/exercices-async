import axios from 'axios'
import fs from 'fs/promises'

let htmlContent = await axios.get(process.argv[3]).data

await fs.writeFile(process.argv[2], htmlContent)

console.log(`L'adresse ${htmlContent} a bien été copié dans le nouveau fichier`)