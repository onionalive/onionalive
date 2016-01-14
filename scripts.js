var mineral = 0,
 gold = 0,
 goldAddCT = 0,
 science = 0,
 miner = 0,
 mineralAddCT = 0,
 outrRimAsteroid = 0,
 outrRimAsteroidCost = 100,
 smallTransShip = 0,
 minerCost = 20,
 schoolCost = 300,
 schoolCostGold = 10,
 smallshipCost = 1000,
 traderCT = 20,
 kautSettle = false,
 kautSettleCost = 17000000,
 fateSelection = false;


function roundNumbers() {
  mineral = Math.floor(mineral * 100) / 100;
  gold = Math.floor(gold * 100) / 100;
  goldAddCT = Math.floor(goldAddCT * 100) / 100;
  mineralAddCT = Math.floor(mineralAddCT * 100) / 100;
  miner = Math.floor(miner * 100) / 100;
  outrRimAsteroid = Math.floor(outrRimAsteroid * 100) / 100;
  outrRimAsteroidCost = Math.floor(outrRimAsteroidCost * 100) / 100;
  minerCost = Math.floor(minerCost * 100) / 100;
  smallshipCost = Math.floor(smallshipCost * 100) / 100;
}

function workshopGrow() {
  if (miner >= 5) {
    document.getElementById('oRAItem').style.display = 'block';
    document.getElementById('oRAItemCT').style.display = 'block';
  }
  if (outrRimAsteroid >= 1) {
    document.getElementById('smallShipItem').style.display = 'block';
    document.getElementById('smallShipCount').style.display = 'block';
  }
}

function loadMaterials() {
  workshopGrow();
  roundNumbers();
  document.getElementById("mineralCT").innerHTML = mineral;
  document.getElementById("goldCT").innerHTML = gold;
  document.getElementById("goldAddCT").innerHTML = goldAddCT;
  document.getElementById("mineralAdCT").innerHTML = mineralAddCT;
  document.getElementById("minerCT").innerHTML = miner;
  document.getElementById("traderCT").innerHTML = traderCT;
  document.getElementById("outrRimAsteroid").innerHTML = outrRimAsteroid;
  document.getElementById("oRACost").innerHTML = outrRimAsteroidCost;
  document.getElementById("newMinerCost").innerHTML = minerCost + " Minerals";
  document.getElementById("newSchoolCost").innerHTML = schoolCost + " Minerals " + schoolCostGold + " Gold";
  document.getElementById("smallShipCT").innerHTML = smallTransShip;
  document.getElementById("newSmallShipCost").innerHTML = smallshipCost + " Minerals";
  document.getElementById("fushionDrillCost").innerHTML = "1000 Minerals & 100 Gold";
  document.getElementById("smallTransShip").innerHTML = smallTransShip;
}

function addMinerals(numClicked) {
    mineral = mineral + numClicked;
    loadMaterials();
}
function addMiner(numClicked) {
  if (mineral >= minerCost) {
    mineral = mineral - minerCost;
    miner = miner + numClicked;
    minerCost = minerCost + minerCost * 0.2;
    loadMaterials();
  }
}
function addORA(numClicked) {
  if (mineral >= outrRimAsteroidCost) {
    mineral = mineral - outrRimAsteroidCost;
    outrRimAsteroid = outrRimAsteroid + numClicked;
    outrRimAsteroidCost = outrRimAsteroidCost + (outrRimAsteroidCost * 0.6);
    loadMaterials();
  }
}
function addYtSmall(numClicked) {
  if (mineral >= smallshipCost) {
    mineral = mineral - smallshipCost;
    smallTransShip = smallTransShip + numClicked;
    smallshipCost = smallshipCost + (smallshipCost * 0.42);
    loadMaterials();
  }
}
function addTrader(numClicked) {
  if (mineral >= 20) {
    mineral = mineral - 20;
    traderCT = traderCT + numClicked;
    loadMaterials();
  }
}

function incrementCount(minerNum, outrRimAsteroidNum, smallShip) {
  var minerIncrease = 0;
  var outrRimAsteroidIncrease = 0;
  var mineralAddCTTwo = mineralAddCT;
  var shipDelta = 0;
  if (minerNum >= 1) {
    if (outrRimAsteroidNum >= 1) {
      var initialIncrease = miner + (minerNum * 0.3);
      var orAsteroidIncrease = outrRimAsteroidNum * (initialIncrease / 2);
      minerIncrease = initialIncrease + orAsteroidIncrease;
      outrRimAsteroidIncrease = mineralAddCTTwo * 0.5;
    } else {
      minerIncrease = miner + (minerNum * 0.3);
    }
    if (smallShip >= 1) {
      mineral = mineral - (smallShip * 10);
      gold = gold + (smallShip * 0.1);
      goldAddCT = (smallShip * 0.1);
      shipDelta = (smallShip * 10);
    }
    if (fushionDrillCT >= 1) {
      minerIncrease = minerIncrease + (minerIncrease * 0.2);
    }
  }
  mineralAddCT = minerIncrease;
  mineralAddCT = mineralAddCT - shipDelta;
  mineral = mineral + mineralAddCT;
  loadMaterials();
}

function fullIncrement() {
  incrementCount(miner, outrRimAsteroid, smallTransShip);
}
setInterval(fullIncrement, 500);

function allArea() {
  document.getElementById('allArea').style.display = 'block';
  document.getElementById('scienceArea').style.display = 'none';
  document.getElementById('galaxyArea').style.display = 'none';
  document.getElementById('fateArea').style.display = 'none';
}
function scienceArea() {
  document.getElementById('scienceArea').style.display = 'block';
  document.getElementById('allArea').style.display = 'none';
  document.getElementById('galaxyArea').style.display = 'none';
  document.getElementById('fateArea').style.display = 'none';
}
function galaxyArea() {
  document.getElementById('scienceArea').style.display = 'none';
  document.getElementById('allArea').style.display = 'none';
  document.getElementById('galaxyArea').style.display = 'block';
  document.getElementById('fateArea').style.display = 'none';
}
function fateArea() {
  document.getElementById('scienceArea').style.display = 'none';
  document.getElementById('allArea').style.display = 'none';
  document.getElementById('galaxyArea').style.display = 'none';
  document.getElementById('fateArea').style.display = 'block';
}

function getPlanetInfo(planet) {
  if (planet == "Coruscant") {
    document.getElementById('coruscantInfo').style.display = 'block';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Tatooine") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'block';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Mustafar") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'block';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Corellia") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'block';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Kuat") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'block';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Onderon") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'block';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  } else if (planet == "Nal-hutta") {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'block';
  } else {
    document.getElementById('coruscantInfo').style.display = 'none';
    document.getElementById('tatooineInfo').style.display = 'none';
    document.getElementById('mustafarInfo').style.display = 'none';
    document.getElementById('corelliaInfo').style.display = 'none';
    document.getElementById('kuatInfo').style.display = 'none';
    document.getElementById('onderonInfo').style.display = 'none';
    document.getElementById('nalhuttaInfo').style.display = 'none';
  }
}

function settlePlanet(planet) {
  if (planet = "Kaut" && credits >= kautSettleCost) {
    kautSettle = true;
  }
}




// Science Area ///////////////////////////////////////////////////////////////////////////////////////////////////////




var fushionDrillCT = 0;

function buyFushionDrill(numClicked) {
  if (mineral >= 1000 && gold >= 100) {
    mineral = mineral - 1000;
    gold = gold - 100;
    fushionDrillCT++;
    hideBoughtScience();
  }
}

function hideBoughtScience() {
  if (fushionDrillCT >= 1) {
    fushionDrillCT = 1;
    document.getElementById('fushionDrill').style.display = 'none';
    document.getElementById('droidTechnology').style.display = 'block';
    document.getElementById('spiceLocator').style.display = 'block';
  }
}



//Basic set functions //////////////////////////////////////////////////////////////////////////////////////
function setGold(newGold) {
  gold = newGold;
}
function setMinerals(newMinerals) {
  mineral = newMinerals;
}
function setGM(newGold, newMinerals) {
  gold = newGold;
  mineral = newMinerals;
}
function showGalaxyTab() {
  document.getElementById('galaxyArea').style.display = 'block';
}
