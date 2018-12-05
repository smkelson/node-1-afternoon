const express = require('express');
const bodyParser = require('body-parser')
const mc = require('./controllers/controllers.js')
const PORT = 3001;
const messageBaseUrl = '/api/messages';

const app = express();
app.use (bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))


app.post( messageBaseUrl, mc.create);
app.get( messageBaseUrl, mc.read );
app.put( messageBaseUrl + '/:id', mc.update);
app.delete( messageBaseUrl + '/:id', mc.delete)

app.listen( PORT, () => { console.log(`Server listening on post ${[PORT]}`); });