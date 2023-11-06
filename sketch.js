let canvasScale;
let palette;

let colors = {
  user1723: [
    {hue: 212, sat: 14, light : 46},
    {hue: 212, sat: 14, light : 46},
    {hue: 0, sat: 0, light: 15},
    {hue: 205, sat: 20, light: 84},
    {hue: 0, sat: 0, light: 0},
    {hue: 205, sat: 20, light: 84},
    {hue: 205, sat: 20, light: 84},
  ],
  pepe: [
    {hue: 230, sat: 96, light : 56},
    {hue: 230, sat: 96, light : 56},
    {hue: 230, sat: 96, light : 56},
    {hue: 0, sat: 0, light : 0},
    {hue: 19, sat: 44, light : 47},
    {hue: 0, sat: 0, light : 0},
    {hue: 99, sat: 33, light : 45},
    {hue: 99, sat: 33, light : 35},
    {hue: 0, sat: 0, light : 0},
    {hue: 0, sat: 0, light : 100},
    {hue: 0, sat: 0, light : 100},
    {hue: 0, sat: 0, light : 100},
  ],
  garrett: [
    {hue: 45, sat: 55, light: 64},
    {hue: 45, sat: 55, light: 64},
    {hue: 22, sat: 47, light: 26},
    {hue: 29, sat: 40, light: 62},
    {hue: 222, sat: 39, light: 29},
    {hue: 206, sat: 11, light : 88},
    {hue: 0, sat: 0, light: 15},
    {hue: 0, sat: 0, light: 15},
  ],
  mleejr: [
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 100, light: 49},
    {hue: 0, sat: 0, light: 15},
    {hue: 29, sat: 98, light: 72},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 100},
    {hue: 0, sat: 0, light: 0},
  ],
  kiki: [
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 0},
    {hue: 40, sat: 97, light: 41},
    {hue: 39, sat: 83, light: 54},
    {hue: 0, sat: 0, light: 30},
    {hue: 49, sat: 99, light: 69},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 60}
  ],
  johnnycash424: [
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 0},
    {hue: 49, sat: 99, light: 69},
    {hue: 217, sat: 100, light: 47},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 100, light: 49},
    {hue: 180, sat: 100, light: 50},
    {hue: 0, sat: 0, light: 100},
  ],
  skittles: [
    {hue: 0, sat: 0, light: 21},
    {hue: 219, sat: 97, light: 43},
    {hue: 0, sat: 0, light: 0},
    {hue: 49, sat: 99, light: 69},
    {hue: 356, sat: 96, light: 76},
    {hue: 0, sat: 0, light: 100},
    {hue: 351, sat: 100, light: 50},
  ],
  codincowboy: [
    {hue: 202, sat: 60, light: 49},
    {hue: 9, sat: 49, light: 50},
    {hue: 48, sat: 57, light: 53},
    {hue: 299, sat: 44, light: 58},
    {hue: 349, sat: 91, light: 95},
    {hue: 108, sat: 47, light: 55},
    {hue: 260, sat: 48, light: 55},
  ],
  gallwas: [
    {hue: 97, sat: 55, light: 76},
    {hue: 198, sat: 37, light: 73},
    {hue: 359, sat: 78, light: 75},
    {hue: 0, sat: 0, light: 56},
    {hue: 40, sat: 87, light: 65},
    {hue: 241, sat: 76, light: 45},
    {hue: 240, sat: 4, light: 10},
  ],
  meltedmindz: [
    {hue: 0, sat: 0, light: 91},
    {hue: 306, sat: 75, light: 36},
    {hue: 0, sat: 0, light: 100},
    {hue: 307, sat: 56, light: 29},
    {hue: 89, sat: 100, light: 71},
    {hue: 213, sat: 100, light: 50},
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 69},
  ],
  seacasa: [
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 15},
    {hue: 196, sat: 98, light: 68},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 30},
    {hue: 357, sat: 96, light: 76},
    {hue: 0, sat: 0, light: 100},
  ],
  sartocrates: [
    {hue: 0, sat: 0, light: 100},
    {hue: 286, sat: 100, light: 50},
    {hue: 0, sat: 0, light: 15},
    {hue: 90, sat: 100, light: 71},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 0},
  ],
  nikita: [
    {hue: 174, sat: 87, light: 56},
    {hue: 259, sat: 28, light: 36},
    {hue: 15, sat: 65, light: 66},
    {hue: 10, sat: 43, light: 38},
    {hue: 196, sat: 32, light: 9},
    {hue: 350, sat: 83, light: 55},
    {hue: 228, sat: 51, light: 79},
  ],
  massurealist: [
    {hue: 168, sat: 24, light: 45},
    {hue: 60, sat: 48, light: 95},
    {hue: 61, sat: 93, light: 82},
    {hue: 141, sat: 38, light: 72},
    {hue: 214, sat: 100, light: 31},
    {hue: 34, sat: 88, light: 37},
    {hue: 20, sat: 79, light: 22},
    {hue: 193, sat: 58, light: 80},
    {hue: 26, sat: 89, light: 37},
    {hue: 28, sat: 65, light: 73},
    {hue: 51, sat: 95, light: 63},
    {hue: 22, sat: 49, light: 22},
    {hue: 38, sat: 87, light: 59},
  ],
  creeezy: [
    {hue: 0, sat: 82, light: 43},
    {hue: 53, sat: 92, light: 51},
    {hue: 0, sat: 100, light: 34},
    {hue: 196, sat: 98, light: 68},
    {hue: 0, sat: 4, light: 29},
    {hue: 359, sat: 49, light: 81},
    {hue: 0, sat: 0, light: 0},
    {hue: 353, sat: 100, light: 50},
    {hue: 52, sat: 96, light: 68},
  ],
  jordan: [
    {hue: 72, sat: 66, light: 58},
    {hue: 79, sat: 75, light: 37},
    {hue: 71, sat: 86, light: 39},
    {hue: 0, sat: 0, light: 0},
    {hue: 68, sat: 65, light: 25},
    {hue: 63, sat: 97, light: 52},
    {hue: 79, sat: 97, light: 28},
    {hue: 99, sat: 76, light: 15},
    {hue: 91, sat: 97, light: 13},
  ],
  fivetoads: [
    {hue: 0, sat: 0, light: 100},
    {hue: 51, sat: 98, light: 48},
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 100},
    {hue: 0, sat: 0, light: 0},
    {hue: 196, sat: 99, light: 68},
    {hue: 180, sat: 0, light: 0},
  ],
  metabananas: [
    {hue: 0, sat: 0, light: 15},  
    {hue: 0, sat: 0, light: 0},
    {hue: 42, sat: 100, light: 50},
    {hue: 0, sat: 0, light: 30},
    {hue: 196, sat: 99, light: 68},
    {hue: 0, sat: 0, light: 60},
    {hue: 213, sat: 100, light: 49},
    {hue: 0, sat: 0, light: 100}
  ]
}

let disorderMaps = {
  "big city": 64,
  "suburb": 128,
  "small town": 256,
  "village": 512,
  "valley": 1024,
  "ocean": 1536
};

let orderAgents = {
  "rook": 1,
  "bishop": 3,
  "queen": 4,
  "none": 0
};

let special = {
  "no": 0.1,
  "yes": 0.9
};

let pixelSizes = {
  "s": 1,
  "m": 5,
  "l": 10
};

function setup() {
    generateArt();
}

// 0x062df8ee9f68760a1af6e76b9e851695f346514c1d56c7b62706c0e034eb9aeb

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

function generateArt() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var seedFromUrl = urlParams.get('seed');

  if (seedFromUrl == null && document.getElementById("seed").value == "") {
    document.getElementById("generateSeed").checked = true;
  } else if (seedFromUrl != null) {
    document.getElementById("seed").value = seedFromUrl;
  }

  if (document.getElementById("generateSeed").checked == true) {
    seed = "0x" + genRanHex(64);
    document.getElementById("seed").value = seed;
  } else {
    seed = document.getElementById("seed").value;
  }

  let R = new Random(seed);
  // Read values from UI
  if (document.getElementById('palette').value != "random") {
    palette = document.getElementById('palette').value;
    R.random_choice(Object.keys(colors));
  } else {
    palette = R.random_choice(Object.keys(colors));
  }

  if (document.getElementById('disorderMap').value != "random") {
    disorderMapFactor = document.getElementById('disorderMap').value;
    R.random_choice(Object.values(disorderMaps));
  } else {
    disorderMapFactor = R.random_choice(Object.values(disorderMaps));
  }

  if (document.getElementById('orderAgent').value != "random") {
    coinFlip = document.getElementById('orderAgent').value;
    R.random_choice(Object.values(orderAgents));
  } else {
    coinFlip = R.random_choice(Object.values(orderAgents));
  }

  if (document.getElementById('special').value != "random") {
    specialFactor = document.getElementById('special').value;
    R.random_choice(Object.values(special));
  } else {
    specialFactor = R.random_choice(Object.values(special));
  }

  if (document.getElementById('pixelSize').value != "random") {
    scl = document.getElementById('pixelSize').value;
    R.random_choice(Object.values(pixelSizes));
  } else {
    scl = R.random_choice(Object.values(pixelSizes));
  }

// function setup() {
  // let canvasScale = 1;
  let canvasSize = 1000;
  colorMode(HSL);
  noiseSeed(R.random_num(0, 17231));
  createCanvas(canvasSize, canvasSize);

  canvas.style.width = 'auto';
  canvas.style.height = '100%';

  // let sclRange = [1, 5];
  // for (var sclI = 1; sclI <= canvasScale; sclI++) {
  //   sclRange.push(10*sclI)
  // }
  // let scl = random(sclRange);

  let checkersScl = R.random_choice([510, 20]);

  var inc = scl / disorderMapFactor;
  var xoff = R.random_int(0, 1000);
  // var coinFlip = random(0, 4);

  var indexes = []
  var kIndexes = []

  // var specialFactor = random(0, 1);
  var specialFactorThreshold = 0.85;
  var hue = R.random_int(0, 360);
  var monochromeRange = 50;
  for (var j = 0; j < (canvasSize/scl) + 1; j++) {
    var yoff = 0;
    kIndexes = []
    for (var k = 0; k < (canvasSize/scl) + 1; k++) {
      if (scl < 5 && specialFactor >= specialFactorThreshold) {
        var index = floor(noise(xoff, yoff) * monochromeRange/5);
      } else {
        var index = floor(noise(xoff, yoff) * colors[palette].length);
      }
      kIndexes.push(index);
      noStroke();

      if (j>1 && k>1 && indexes[j-1][k-1] != index && scl >= 5 && specialFactor >= specialFactorThreshold) {
        prevColor = color(colors[palette][indexes[j-1][k-1]].hue, colors[palette][indexes[j-1][k-1]].sat, colors[palette][indexes[j-1][k-1]].light);
        currentColor = color(colors[palette][index].hue, colors[palette][index].sat, colors[palette][index].light);
        newColor = lerpColor(prevColor, currentColor, 0.5);
        fill(newColor);
      } else if (scl < 5 && specialFactor >= specialFactorThreshold) {
        fill(hue, 69, (100-monochromeRange)/2 + (index*monochromeRange/10));
      } else {
        fill(colors[palette][index].hue, colors[palette][index].sat, colors[palette][index].light);
      }

      if (coinFlip < 0.2) {
        rect(scl*j, scl*k, scl, scl);
      } else if (coinFlip < 2) {
        if (j < (canvasSize/scl)/2 && k < (canvasSize/scl)/2) {
          rect(scl*j, scl*k, scl, scl);
          rect(canvasSize-scl-scl*j, scl*k, scl, scl);
          rect(scl*j, canvasSize-scl-scl*k,scl, scl);
          rect(canvasSize-scl-scl*j, canvasSize-scl-scl*k, scl, scl); 
        }
      } else if (coinFlip < 3.5) {
        if ((canvasSize/scl - j > k) && (j >= k))  {
          rect(scl*j, scl*k, scl, scl);
          rect(scl*k, scl*j, scl, scl);
          rect(canvasSize-scl-scl*j, canvasSize-scl-scl*k, scl, scl);
          rect(canvasSize-scl-scl*k, canvasSize-scl-scl*j, scl, scl);
        } 
      } else {
        if (j >= k && j < (canvasSize/scl)/2 && k < (canvasSize/scl)/2)  {
          rect(scl*j, scl*k, scl, scl);
          rect(canvasSize-scl-scl*j, scl*k, scl, scl);
          rect(canvasSize-scl-scl*k, scl*j, scl, scl);
          rect(canvasSize-scl-scl*k, canvasSize-scl-scl*j, scl, scl);
          rect(canvasSize-scl-scl*j, canvasSize-scl-scl*k, scl, scl);
          rect(scl*j, canvasSize-scl-scl*k, scl, scl);
          rect(scl*k, canvasSize-scl-scl*j, scl, scl);
          rect(scl*k, scl*j, scl, scl);
        } 
      }
      yoff += inc;
    }
    indexes.push(kIndexes);
    xoff += inc;
  }
  
  var checkersInc = 0.03;
  var aoff = 1723;
  for (var a = 0; a < (canvasSize/checkersScl) + 1; a++) {
    var boff = 1723;
    for (var b = 0; b < (canvasSize/checkersScl) + 1; b++) {
      if (noise(aoff, boff) > 0.85) {
        if (a % 2 == b % 2) {
          fill(colors[palette][0].hue, colors[palette][0].sat, colors[palette][0].light);
          rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
        } else {
          fill(colors[palette][colors[palette].length-1].hue, colors[palette][colors[palette].length-1].sat, colors[palette][colors[palette].length-1].light);
          rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
        }
      }
      boff += checkersInc;
    }
    aoff += checkersInc;
  }
}
