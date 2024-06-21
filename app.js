const express = require('express')
const axios = require('axios');
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var content = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>HTML5 Boilerplate</title>
        <script
            src="https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js"
            type="text/javascript">
        </script>
        <script>
            window.DD_RUM && window.DD_RUM.init({
            clientToken: 'pub080bc2d58b329f573ba8dff4d642b138',
            applicationId: '7c732f70-d533-4372-83cb-6e2d5f951b6b',
            site: 'datadoghq.com',
            service: 'labbati-rum-tests',
            env: 'labbati-local',
            // Specify a version number to identify the deployed version of your application in Datadog
            // version: '1.0.0',
            allowedTracingUrls: ["http://localhost:8080"],
            sessionSampleRate: 100,
            sessionReplaySampleRate: 20,
            trackUserInteractions: true,
            trackResources: true,
            trackLongTasks: true,
            defaultPrivacyLevel: 'mask-user-input',
            });

            function sendAjax() {
                console.log('Sending ajax');
                let xhttp = new XMLHttpRequest();
                xhttp.open("GET", "/ajax", true);
                xhttp.send();
                console.log('Done');
            }
        </script>
    </head>

    <body>
        <h1>Page Title</h1>
        <p>Hello!</p>
        <button onclick="sendAjax()">Send</button>
    </body>
    </html>
    `;
    res.send(content);
})

app.get('/ajax', (req, res) => {
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
});


(async () => {
    // process._rawDebug('about to wait a very long time')
    // for (let i = 0; i < 10000; i++) await new Promise(r => r())
    // process._rawDebug('done waiting a very long time')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})()

