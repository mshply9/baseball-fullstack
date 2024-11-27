const express = require('express');
const { Player } = require('./models');  // Import Player model
const { PlayerSeason } = require('./models');  // Import PlayerSeason model
const sequelize = require('./models');  // Import sequelize instance
const app = express();

app.use(express.json());  // For parsing application/json

// Route to create a new player
app.post('/players', async (req, res) => {
  const { name, team, position } = req.body;

  try {
    const newPlayer = await Player.create({ name, team, position });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).send('Error creating player');
  }
});

// Route to add or update season stats for a player
app.post('/players/:id/season-stats', async (req, res) => {
  const playerId = req.params.id;
  const { season, battingAverage, homeRuns, runsBattedIn } = req.body;

  try {
    // Check if the season stats already exist
    let playerSeason = await PlayerSeason.findOne({
      where: { playerId, season },
    });

    if (playerSeason) {
      // If season stats already exist, update them
      playerSeason.age = age; 
      playerSeason.team = team;
      playerSeason.league = league;
      playerSeason.war = war;
      playerSeason.g = g; 
      playerSeason.pa = pa;
      playerSeason.ab = ab;
      playerSeason.r = r;
      playerSeason.h = h;
      playerSeason.doubles = doubles;
      playerSeason.triples = triples;
      playerSeason.hr = hr;
      playerSeason.rbi = rbi;
      playerSeason.sb = sb;
      playerSeason.cs = cs;
      playerSeason.bb = bb;
      playerSeason.so = so;
      playerSeason.avg = avg; 
      playerSeason.obp = obp;
      playerSeason.slg = slg;
      playerSeason.ops = ops;
      playerSeason.ops_plus = ops_plus;
      playerSeason.tb = tb;
      playerSeason.gdp = gdp;
      playerSeason.hbp = hbp;
      playerSeason.sh = sh;
      playerSeason.sf = sf;
      playerSeason.ibb = ibb;
      playerSeason.pos = pos;
      playerSeason.awards = awards;
      await playerSeason.save();
      return res.status(200).json(playerSeason);
    } else {
      // If no stats for this season, create new stats
      const newPlayerSeason = await PlayerSeason.create({
        playerId,
        season,
        age,
        team,
        league,
        war,
        g,
        pa,
        ab,
        r,
        h,
        doubles,
        triples,
        hr,
        rbi,
        sb,
        cs,
        bb,
        so,
        avg,
        obp,
        slg,
        ops,
        ops_plus,
        tb,
        gdp,
        hbp,
        sh,
        sf,
        ibb,
        pos,
        awards
      });
      res.status(201).json(newPlayerSeason);
    }
  } catch (error) {
    res.status(400).send('Error adding/updating season stats');
  }
});

// Route to fetch a player's stats for a particular season
app.get('/players/:id/season-stats/:season', async (req, res) => {
  const playerId = req.params.id;
  const season = req.params.season;

  try {
    const playerSeason = await PlayerSeason.findOne({
      where: { playerId, season },
    });

    if (!playerSeason) {
      return res.status(404).send('Season stats not found');
    }
    res.json(playerSeason);
  } catch (error) {
    res.status(500).send('Error fetching season stats');
  }
});

// Route to fetch all season stats for a player
app.get('/players/:id/season-stats', async (req, res) => {
  const playerId = req.params.id;

  try {
    const playerSeason = await PlayerSeason.findAll({
      where: { playerId },
    });
    res.json(playerSeason);
  } catch (error) {
    res.status(500).send('Error fetching season stats');
  }
});

// Sync database (if not already done)
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
