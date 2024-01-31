const axiosRequest = require('axios')
axiosRequest
    .get('https://www.boredapi.com/api/activity')
    //.get('https://httpstat.us/404')
    .then(response => {
        console.log(`Title: ${response.data.activity}`)
    })
    .catch((error) => {
        console.error(`EROOR! ${error}`)
    })