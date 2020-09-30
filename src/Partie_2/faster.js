import axios from 'axios'

/* const asyncTask = async(url) => {
    await axios.get(url)
    return new Promise((resolve, reject) => {
        console.log(`URL : ${url}`)
        resolve(`${url} chargé en premier`)
    })
}

let data = await Promise.race([
    asyncTask(`https://www.facebook.com`),
    asyncTask(`https://www.amazon.com`),
    asyncTask(`https://www.apple.com`),
    asyncTask(`https://www.google.com`),
]).catch((err) => {
    console.error(err)
})
console.log(data) */

let data = await Promise.race([
    axios.get(`https://www.facebook.com`).then(() => 'facebook'),
    axios.get(`https://www.amazon.com`).then(() => 'amazon'),
    axios.get(`https://www.apple.com`).then(() => 'appel'),
    axios.get(`https://www.google.com`).then(() => 'google')
]).catch((err) => {
    console.log(err)
})
console.log(data)