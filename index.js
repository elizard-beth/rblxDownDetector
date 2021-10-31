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
                console.log("YES, Roblox may be experiencing major issues.")
            } else {
                console.log("NO, Roblox is not experiencing any major issues.")
            }
        }
    })
})
  
req.on('error', error => {
    console.error(error)
})
  
req.end()
