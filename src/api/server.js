const path = require('path');
const cors = require('cors');
const express = require('express');
const proxy = require('express-http-proxy');
const { connect } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

// Chargement des variables d'environnement
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Gestion des CORS
app.use(cors({}));

// On définit le dossier build comme statique, ce qui permet de publier
// l'application REACT
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Connection à la BDD
const db = connect({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Page d'accueil de l'API (on renvoie simplement le contenu d'index.html)
app.use('/api', express.static(path.join(__dirname, 'index.html')));

// Proxy vers l'API de deezer
app.use('/api/deezer', proxy('https://api.deezer.com'));

// Endpoint qui renvoie la liste de TOUS les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
