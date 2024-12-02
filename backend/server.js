const express = require('express');
const { Player, Pitcher, PlayerSeason, PitcherSeason } = require('./models');
const sequelize = require('./models');  // Import sequelize instance
const app = express();

require('dotenv').config();  // Load environment variables
app.use(express.json());  // For parsing application/json

// Route to create a new player
app.post('/players', async (req, res) => {
  const { playerID, name, positions, bats, throws, team, born, draft,
    war, ab, h, hr, avg, r, rbi, sb, obp, slg, ops, ops_plus } = req.body;

  try {
    const newPlayer = await Player.create({ 
      playerID, name, positions, bats, throws, team, born, draft, war, ab,
      h, hr, avg, r, rbi, sb, obp, slg, ops, ops_plus });
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).send('Error creating player');
  }
});

// Route to create a new pitcher
app.post('/pitchers', async (req, res) => {
  const { playerID, name, positions, bats, throws, team, born, draft,
    war, w, l, era, g, gs, sv, ip, so, whip } = req.body;

    try {
      // Ensure pitcheris created with all necessary attributes
      const newPitcher = await Pitcher.create({
        playerID, name, positions, bats, throws, team, born, draft, 
        war, w, l, era, g, gs, sv, ip, so, whip
      });
      res.status(201).json(newPitcher);
    } catch (error) {
      res.status(400).send('Error creating pitcher');
    }
});

// Route to add or update season stats for a player
app.post('/players/:id/season-stats', async (req, res) => {
  const playerId = req.params.id;
  const { playerID, name, season, age, team, league, war, g, pa, ab, r, h, doubles,
    triples, hr, rbi, sb, cs, bb, so, avg, obp, slg, ops, ops_plus, tb, gdp, hbp,
    sh, sf, ibb, pos, awards } = req.body;

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
        playerId, season, age, team, league, war, g, pa, ab, r, h, doubles, triples, hr, rbi, 
        sb, cs, bb, so, avg, obp, slg, ops, ops_plus, tb, gdp, hbp, sh, sf, ibb, pos, awards
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

// Route to create a new pitcher
app.post('/pitchers/:id/season-stats', async (req, res) => {
  const pitcherId = req.params.id; // Get pitcher ID from URL
  const { playerID, name, season, age, team, league, war, w, l, win_percent, 
    era, g, gs, gf, cg, sho, sv, ip, h, r, er, hr, bb, ibb, so, hbp, bk, 
    wp, bf, era_plus, fip, whip, h9, hr9, bb9, so9, so_bb, awards } = req.body;

    try {
      let pitcherSeason = await PitcherSeason.findOne({
        where: { pitcherId, season },
      });

      if (pitcherSeason) {
        // Update existing stats
        pitcherSeason.age = age;
        pitcherSeason.team = team;
        pitcherSeason.league = league;
        pitcherSeason.war = war;
        pitcherSeason.w = w;
        pitcherSeason.l = l;
        pitcherSeason.win_percent = win_percent;
        pitcherSeason.era = era;
        pitcherSeason.g = g;
        pitcherSeason.gs = gs;
        pitcherSeason.gf = gf;
        pitcherSeason.cg = cg;
        pitcherSeason.sho = sho;
        pitcherSeason.sv = sv;
        pitcherSeason.ip = ip;
        pitcherSeason.h = h;
        pitcherSeason.r = r;
        pitcherSeason.er = er;
        pitcherSeason.hr = hr;
        pitcherSeason.bb = bb;
        pitcherSeason.ibb = ibb;
        pitcherSeason.so = so;
        pitcherSeason.hbp = hbp;
        pitcherSeason.bk = bk;
        pitcherSeason.wp = wp;
        pitcherSeason.bf = bf;
        pitcherSeason.era_plus = era_plus;
        pitcherSeason.fip = fip;
        pitcherSeason.whip = whip;
        pitcherSeason.h9 = h9;
        pitcherSeason.hr9 = hr9;
        pitcherSeason.bb9 = bb9;
        pitcherSeason.so9 = so9;
        pitcherSeason.so_bb = so_bb;
        pitcherSeason.awards = awards;
        await pitcherSeason.save();
        return res.status(200).json(pitcherSeason);
      } else {
        // Create new stats
        const newPitcherSeason = await PitcherSeason.create({
          pitcherId, season, age, team, league, war, w, l, win_percent, era, g, gs, gf,
          cg, sho, sv, ip, h, r, er, hr, bb, ibb, so, hbp, bk, wp, bf, era_plus,
          fip, whip, h9, hr9, bb9, so9, so_bb, awards
      });
      res.status(201).json(newPitcherSeason);
    }
  } catch (error) {
    res.status(400).send('Error adding/updating season stats');
  }
});

// Route to fetch all players 
app.get('/players', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.json(players);
  } catch (error) {
    res.status(500).send('Error fetching players');
  }
});

// Route to fetch all pitchers
app.get('/pitchers', async (req, res) => {
  try {
    const pitchers = await Pitcher.findAll();
    res.json(pitchers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching pitchers');
  }
})

// Route to fetch a pitcher's stats for a particular season
app.get('/pitchers/:id/season-stats/:season', async (req, res) => {
  const pitcherId = req.params.id;
  const season = req.params.season;

  try { 
    const pitcherSeason = await PitcherSeason.findOne({
      where: { pitcherId, season },
    });

    if (!pitcherSeason) {
      return res.status(404).send('Season stats not found');
    }
    res.json(pitcherSeason);
  } catch (error) {
    res.status(500).send('Error fetching season stats');
  }
});

// Route to fetch all season stats for a pitcher
app.get('/pitchers/:id/season-stats', async (req, res) => {
  const pitcherId = req.params.id;

  try {
    const pitcherSeason = await PitcherSeason.findAll({
      where: { pitcherId },
    });
    res.json(pitcherSeason);
  } catch (error) {
    res.status(500).send('Error fetching season stats');
  }
});

// Sync database (avoid using in production)
if (process.env.NODE_ENV === 'development') {
  sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
  });
} else {
  sequelize.sync().then(() => {
    console.log('Database & tables synced!');
});
}

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
