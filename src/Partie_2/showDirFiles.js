import fs from 'fs'

if (process.argv.length !==3) {
    console.log('Usage : showDirFiles.js dir')
    process.exit(1)
}

let dir = process.argv[2]

fs.readdir(dir, (err, files) => {
    if (err) {
        return console.log(`Unable to open directory : `, err)
    }

    files.forEach(file => {
        let path = dir + file
        fs.readFile(path, 'utf-8', (err, data) => {
            console.log(data)
        })
       // console.log(file)
    });
})