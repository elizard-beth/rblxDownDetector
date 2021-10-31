const HTTPS = require('https')
let i = 0;

let options = {
    hostname: 'status.roblox.com',
    method: 'GET'
}
  
let req = HTTPS.request(options, res => {
    res.on('data', data => {
        i++;
        if (i < 2) {
            if (toString(data).search("Service Disruption")) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
    })
})
  
req.on('error', error => {
    console.error(error)
})
  
req.end()
