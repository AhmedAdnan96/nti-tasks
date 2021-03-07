const https = require('https') ; 
const chalk =require('chalk') ; 


const showApi = function (name, id) {
    const https = require('https')

    if (name == 'posts') {
        const url = `https://jsonplaceholder.typicode.com/posts`
        const myRequest = https.request(url, (response) => {
            let data = ''
            response.on('data', (chunk) => {
                data = data + chunk.toString()
            })
            response.on('end', () => {
                const body = JSON.parse(data)


                    body.findIndex(idApi => {

                        if (idApi.id == id) console.log( idApi )

                })

            })
        })
        myRequest.on('error', (error) => console.log('error'))
        myRequest.end()
    } else if (name == 'users') {
        const url = `https://jsonplaceholder.typicode.com/users`
        const myRequest = https.request(url, (response) => {
            let data = ''
            response.on('data', (chunk) => {
                data = data + chunk.toString()
            })
            response.on('end', () => {
                const body = JSON.parse(data)

                 body.findIndex(idApi => {

                    if (idApi.id == id) console.log( idApi )

                })

            })
        })
        myRequest.on('error', (error) => console.log('error'))
        myRequest.end()
    }


}
module.exports = {showApi}
