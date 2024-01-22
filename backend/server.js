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



}


);

app.get('/api/surgeon-favorites', async (req, res) => {
  try {
    const interventions = await Intervention.find();
    let surgeonStats = {};

    interventions.forEach(({ surgeon, anesthsiste, nurse1, nurse2, roomNumber, intervention }) => {
      if (!surgeonStats[surgeon]) {
        surgeonStats[surgeon] = { 
          anesthsiste: {}, 
          nurse1: {}, 
          nurse2: {}, 
          roomNumber: {}, 
          intervention: {},
          totalInterventions: 0 // Initialize total interventions counter
        };
      }

      // Increment total interventions for this surgeon
      surgeonStats[surgeon].totalInterventions++;

      // Function to count occurrences
      const countOccurrence = (category, value) => {
        if (!surgeonStats[surgeon][category][value]) {
          surgeonStats[surgeon][category][value] = 1;
        } else {
          surgeonStats[surgeon][category][value]++;
        }
      };

      // Count occurrences for each category
      countOccurrence('anesthsiste', anesthsiste);
      countOccurrence('nurse1', nurse1);
      countOccurrence('nurse2', nurse2);
      countOccurrence('roomNumber', roomNumber);
      countOccurrence('intervention', intervention);
    });

    // Determine favorites for each surgeon
    let favorites = {};
    for (let surgeon in surgeonStats) {
      favorites[surgeon] = {};
      for (let category in surgeonStats[surgeon]) {
        if (category !== 'totalInterventions') {
          let favorite = Object.keys(surgeonStats[surgeon][category]).reduce((a, b) => surgeonStats[surgeon][category][a] > surgeonStats[surgeon][category][b] ? a : b);
          favorites[surgeon][category] = favorite;
        }
      }
    }

    // Sort surgeons by total number of interventions
    let sortedSurgeons = Object.keys(favorites).sort((a, b) => surgeonStats[b].totalInterventions - surgeonStats[a].totalInterventions);

    // Create sorted response
    let sortedResponse = {};
    sortedSurgeons.forEach(surgeon => {
      sortedResponse[surgeon] = favorites[surgeon];
    });

    res.json(sortedResponse);
  } catch (error) {
    res.status(500).send(error);
  }
});
