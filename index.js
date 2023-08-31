const express = require('express');
const IP = require('ip')

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/health', (req, res) => {
  res.send('OK')
});

app.get('/', (req, res) => {
  res.send(`API is up and running - Instance: ${process.env.NODE_APP_INSTANCE}`)
})

app.listen(PORT,() => console.log(`App is running on http://${IP.address()}:${PORT}`) )