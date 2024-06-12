const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    axios.get('http://localhost:5163')
        .then(function (response) {
            // handle success
            res.send('.NET replied with: ' + response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            // res.send('Hello World!')
        });

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
