const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Intervention = require('./models/Intervention');

const app = express();
app.use(cors());
app.use(express.json());

// conn  mongo
mongoose.connect('mongodb+srv://1999ms:RC10yiWESlqO2bcY@smartop.il9qdp9.mongodb.net/Hôpital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'erreur de connexion: '));
db.once('open', function () {
  console.log('connexion établie');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("port: " + PORT);
});


// Route pour obtenir tous les chirurgiens
app.get('/api/interventions', async (req, res) => {
  try {
    const interventions = await Intervention.find();
    res.json(interventions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});