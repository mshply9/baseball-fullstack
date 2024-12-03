import requests 
from bs4 import BeautifulSoup
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create the base class for SQLAlchemy models 
Base = declarative_base()

# Define the Player and PlayerSession models 
class Player(Base):
    __tablename__ = 'players'

    id = Column(String, primary_key=True)
    name = Column(String)
    positions = Column(String)
    bats = Column(String)
    throws = Column(String)
    team = Column(String)
    born = Column(String)
    draft = Column(String)
    war = Column(Float)
    ab = Column(Integer)
    h = Column(Integer)
    hr = Column(Integer)
    avg = Column(Float)
    r = Column(Integer)
    rbi = Column(Integer)
    sb = Column(Integer)
    obp = Column(Float)
    slg = Column(Float)
    ops = Column(Float)
    ops_plus = Column(Integer)

class PlayerSeason(Base): 
    __tablename__ = 'player_seasons'

    id = Column(String, primary_key=True)
    player_id = Column(String, ForeignKey('players.id'))
    season = Column(Integer)
    age = Column(Integer)
    team = Column(String)
    league = Column(String)
    war = Column(Float)
    g = Column(Integer)
    pa = Column(Integer)
    ab = Column(Integer)
    r = Column(Integer)
    h = Column(Integer)
    doubles = Column(Integer)
    triples = Column(Integer)
    hr = Column(Integer)
    rbi = Column(Integer)
    sb = Column(Integer)
    cs = Column(Integer)
    bb = Column(Integer)
    so = Column(Integer)
    avg = Column(Float)
    obp = Column(Float)
    slg = Column(Float)
    ops = Column(Float)
    ops_plus = Column(Integer)
    tb = Column(Integer)
    gdp = Column(Integer)
    hbp = Column(Integer)
    sh = Column(Integer)
    sf = Column(Integer)
    ibb = Column(Integer)
    pos = Column(String)
    awards = Column(String)

class Pitcher(Base):
    __tablename__ = 'pitchers'

    id = Column(String, primary_key=True)
    name = Column(String)
    positions = Column(String)
    bats = Column(String)
    throws = Column(String)
    team = Column(String)
    born = Column(String)
    draft = Column(String)
    war = Column(Float)
    w = Column(Integer)
    l = Column(Integer)
    era = Column(Float)
    g = Column(Integer)
    gs = Column(Integer)
    sv = Column(Integer)
    ip = Column(Float)
    so = Column(Integer)
    whip = Column(Float)

class PitcherSeason(Base):
    __tablename__ = 'pitcher_seasons'

    id = Column(String, primary_key=True)
    pitcher_id = Column(String, ForeignKey('pitchers.id'))
    season = Column(Integer)
    age = Column(Integer)
    team = Column(String)
    league = Column(String)
    war = Column(Float)
    w = Column(Integer)
    l = Column(Integer)
    win_percent = Column(Float)
    era = Column(Float)
    g = Column(Integer)
    gs = Column(Integer)
    gf = Column(Integer)
    cg = Column(Integer)
    sho = Column(Integer)
    sv = Column(Integer)
    ip = Column(Float)
    h = Column(Integer)
    r = Column(Integer)
    er = Column(Integer)
    hr = Column(Integer)
    bb = Column(Integer)
    ibb = Column(Integer)
    so = Column(Integer)
    hbp = Column(Integer)
    bk = Column(Integer)
    fip = Column(Float)
    whip = Column(Float)
    h9 = Column(Float)
    hr9 = Column(Float)
    bb9 = Column(Float)
    so9 = Column(Float)
    so_bb = Column(Float)
    awards = Column(String)

# Setup the PostgreSQL connection
DATABASE_URL = 'postgresql://michaelshipley:mcme2003@localhost:5434/baseball_analytics_dev'
engine = create_engine(DATABASE_URL)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Function to scrape player data 
def scrape_player_data(player_id):
    url = f"https://www.baseball-reference.com/players/{player_id[0]}/{player_id}.shtml"
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Failed to retrieve data for player {player_id}")
        return 
    
    soup = BeautifulSoup(response.text, 'html.parser')
    player_name = soup.find('h1').text

    # Check if player already exists in database
    existing_player = session.query(Player).filter_by(playerID=player_id).first()

    if not existing_player:
        # Insert new player
        player = Player(playerID=player_id, name=player_name)
        session.add(player)
        session.commit()

    # Find player stats table 
    player_stats_table = soup.find('table', {'id': 'batting'})

    if not player_stats_table:
        print(f"Failed to find player stats table for player {player_id}")
        return
    
    player_season_stats = []

    for row in player_stats_table.find_all('tr')[1:]:
        cols = row.find_all('td')
        if len(cols) < 1:
            continue
        season = int(cols[0].text.strip())  
        age = int(cols[1].text.strip()) if cols[1].text.strip() else 0  
        team = int(cols[2].text.strip()) if cols[2].text.strip() else 0    
        league = cols[3].text.strip() if cols[3].text.strip() else '' 
        g = int(cols[4].text.strip() if cols[4].text.strip() else 0)
        pa = int(cols[5].text.strip() if cols[5].text.strip() else 0)
        ab = int(cols[6].text.strip() if cols[6].text.strip() else 0)
        r = int(cols[7].text.strip() if cols[7].text.strip() else 0)
        h = int(cols[8].text.strip() if cols[8].text.strip() else 0)
        doubles = int(cols[9].text.strip() if cols[9].text.strip() else 0)
        triples = int(cols[10].text.strip() if cols[10].text.strip() else 0)
        hr = int(cols[11].text.strip() if cols[11].text.strip() else 0)
        rbi = int(cols[12].text.strip() if cols[12].text.strip() else 0)
        sb = int(cols[13].text.strip() if cols[13].text.strip() else 0)
        cs = int(cols[14].text.strip() if cols[14].text.strip() else 0)
        bb = int(cols[15].text.strip() if cols[15].text.strip() else 0)
        so = int(cols[16].text.strip() if cols[16].text.strip() else 0)
        avg = float(cols[17].text.strip() if cols[17].text.strip() else 0)    
        obp = float(cols[18].text.strip() if cols[18].text.strip() else 0)
        slg = float(cols[19].text.strip() if cols[19].text.strip() else 0)
        ops = float(cols[20].text.strip() if cols[20].text.strip() else 0)
        ops_plus = int(cols[21].text.strip() if cols[21].text.strip() else 0)
        tb = int(cols[25].text.strip() if cols[25].text.strip() else 0)
        gdp = int(cols[26].text.strip() if cols[26].text.strip() else 0)
        hbp = int(cols[27].text.strip() if cols[27].text.strip() else 0)
        sh = int(cols[28].text.strip() if cols[28].text.strip() else 0)
        sf = int(cols[29].text.strip() if cols[29].text.strip() else 0)
        ibb = int(cols[30].text.strip() if cols[30].text.strip() else 0)
        pos = cols[31].text.strip() if cols[31].text.strip() else ''    
        awards = cols[32].text.strip() if cols[32].text.strip() else ''

        player_season_stats.append({
            'season': season,
            'age': age,
            'team': team,
            'league': league,
            'g': g,
            'pa': pa,
            'ab': ab,
            'r': r,
            'h': h,
            'doubles': doubles,
            'triples': triples,
            'hr': hr,
            'rbi': rbi,
            'sb': sb,
            'cs': cs,
            'bb': bb,
            'so': so,
            'avg': avg,
            'obp': obp,
            'slg': slg,
            'ops': ops,
            'ops_plus': ops_plus,
            'tb': tb,
            'gdp': gdp,
            'hbp': hbp,
            'sh': sh,
            'sf': sf,
            'ibb': ibb,
            'pos': pos,
            'awards': awards
        })

    # Save player to database
    # NOTE: May need to change constructor arguments 
    player = Player(name=player_name, positions="N/A", teams="N/A")
    session.add(player)
    session.commit()

    # Save player season stats to database
    for stats in player_season_stats: 
        player_season = PlayerSeason(
            player_id=player.id,
            season=stats['season'],
            age=stats['age'],
            team=stats['team'],
            league=stats['league'],
            war=stats['war'],
            g=stats['g'],
            pa=stats['pa'],
            ab=stats['ab'],
            r=stats['r'],
            h=stats['h'],
            doubles=stats['doubles'],
            triples=stats['triples'],
            hr=stats['hr'],
            rbi=stats['rbi'],
            sb=stats['sb'],
            cs=stats['cs'],
            bb=stats['bb'],
            so=stats['so'],
            avg=stats['avg'],
            obp=stats['obp'],
            slg=stats['slg'],
            ops=stats['ops'],
            ops_plus=stats['ops_plus'],
            tb=stats['tb'],
            gdp=stats['gdp'],
            hbp=stats['hbp'],
            sh=stats['sh'],
            sf=stats['sf'],
            ibb=stats['ibb'],
            pos=stats['pos'],
            awards=stats['awards']
        )
        session.add(player_season)

    session.commit()
    print(f"Player {player_name} data has been saved!")
