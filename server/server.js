// // Charge le module HTTP
// const { read, readFileSync } = require("fs");
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8000;

// // Crée un serveur HTTP
// const server = http.createServer((req, res) => {

//   // Configure l'en-tête de la réponse HTTP
//   // avec le code du statut et le type de contenu
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   // Envoie le corps de la réponse « Salut tout le monde »
//   res.sendFile('index.html')});b

// // Démarre le serveur à l'adresse 127.0.0.1 sur le port 8000
// // Affiche un message dès que le serveur commence à écouter les requêtes
// server.listen(port, hostname, () => {
//   console.log(`Le serveur tourne à l'adresse https://${hostname}:${port}/`);
// })


const express = require("express");
const app = express();
const path = require('path');
console.log(__dirname);

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8000, () => {
  console.log('running on port 8000');
});