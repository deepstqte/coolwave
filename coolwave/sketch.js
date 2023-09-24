let canvasSize = 1000;

let colors = {
  shadesofgray: [
    {hue: 0, sat: 0, light: 100},
    {hue: 0, sat: 0, light: 90},
    {hue: 0, sat: 0, light: 80},
    {hue: 0, sat: 0, light: 70},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 50},
    {hue: 0, sat: 0, light: 40},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 20},
    {hue: 0, sat: 0, light: 10},
    {hue: 0, sat: 0, light: 0},
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
  user1723: [
    {hue: 212, sat: 14, light : 46},
    {hue: 0, sat: 0, light: 15},
    {hue: 205, sat: 20, light: 84},
    {hue: 0, sat: 0, light: 0},
  ],
  peachdog: [
    {hue: 4, sat: 100, light: 83},
    {hue: 89, sat: 48, light: 55},
    {hue: 27, sat: 25, light : 45},
    {hue: 7, sat: 84, light : 69},
    {hue: 29, sat: 100, light: 80},
    {hue: 23, sat: 79, light: 65},
    {hue: 27, sat: 25, light : 45},
    {hue: 240, sat: 2, light : 28},
  ],
  erin: [
    {hue: 211, sat: 86, light: 56},
    {hue: 211, sat: 86, light: 56},
    {hue: 60, sat: 56, light : 91},
    {hue: 211, sat: 66, light: 56},
    {hue: 60, sat: 76, light : 91},
    {hue: 83, sat: 39, light : 44},
    {hue: 60, sat: 36, light : 91},
    {hue: 83, sat: 59, light : 44},
    {hue: 83, sat: 59, light : 44},
  ],
  mleejr: [
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 100, light: 49},
    {hue: 29, sat: 98, light: 72},
    {hue: 0, sat: 0, light: 15},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 0},
  ],
  kiki: [
    {hue: 0, sat: 0, light: 0},
    {hue: 39, sat: 83, light: 54},
    {hue: 49, sat: 99, light: 69},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 60},
    {hue: 40, sat: 97, light: 41}
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
    // {hue: 217, sat: 99, light: 63},
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
    // {hue: 304, sat: 100, light: 59},
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
    {hue: 89, sat: 100, light: 71},
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
  test: [
    {hue: 0, sat: 0, light: 78},
    {hue: 24, sat: 59, light: 28},
    {hue: 0, sat: 0, light: 0},
    {hue: 200, sat: 20, light: 49},
    {hue: 27, sat: 85, light: 24},
    {hue: 17, sat: 76, light: 52},
    {hue: 203, sat: 16, light: 68},
    {hue: 27, sat: 100, light: 17},
    
    // {hue: 0, sat: 0, light: 0},
    // {hue: 0, sat: 0, light: 10},
    // {hue: 0, sat: 0, light: 20},
    // {hue: 0, sat: 0, light: 30},
    // {hue: 0, sat: 0, light: 40},
    // {hue: 0, sat: 0, light: 50},
    // {hue: 0, sat: 0, light: 60},
    // {hue: 0, sat: 0, light: 70},
    // {hue: 0, sat: 0, light: 80},
    // {hue: 0, sat: 0, light: 90},
    // {hue: 0, sat: 0, light: 100},
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
    // yellow
    {hue: 53, sat: 92, light: 51},
    // dark red
    {hue: 0, sat: 100, light: 34},
    // blue
    {hue: 196, sat: 98, light: 68},
    // hoodie grey
    {hue: 0, sat: 4, light: 29},
    // pink
    {hue: 359, sat: 49, light: 81},
    // black
    {hue: 0, sat: 0, light: 0},
    // bright red
    {hue: 353, sat: 100, light: 50},
    {hue: 52, sat: 96, light: 68},
  ],
  mahnaz: [
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 68},
    {hue: 26, sat: 89, light: 76},
    {hue: 3, sat: 86, light: 60},
    {hue: 44, sat: 75, light: 74},
    {hue: 16, sat: 97, light: 71},
    {hue: 272, sat: 78, light: 66},
    {hue: 44, sat: 58, light: 67},
    {hue: 45, sat: 98, light: 84},
  ],
  threadguy: [
    {hue: 0, sat: 0, light: 0},
    {hue: 338, sat: 75, light: 80},
    {hue: 66, sat: 39, light: 45},
    {hue: 289, sat: 15, light: 29},
    {hue: 96, sat: 53, light: 52},
    {hue: 67, sat: 50, light: 71},
    {hue: 358, sat: 13, light: 57},
    {hue: 98, sat: 76, light: 64},
    {hue: 2, sat: 76, light: 42},
    {hue: 92, sat: 62, light: 69},
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
    {hue: 0, sat: 0, light: 0},
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

function setup() {
  canvas.style.width = 'auto';
  canvas.style.height = '100%';

  colorMode(HSL);
  createCanvas(canvasSize, canvasSize);
  let scl = random([5, 1, 1, 10]);
  // let scl = random([1]);
  let checkersScl = random([5, 10, 20]);
  
  print("pixel size: " + scl)
  var fibonacciFactor = random([89, 144, 233, 377, 610]);
  // var fibonacciFactor = random([89]);
  print("zoom: " + fibonacciFactor);
  var inc = scl / fibonacciFactor;
  var palette = random(["user1723", "mleejr", "kiki", "johnnycash424", "skittles", "codincowboy", "gallwas", "seacasa", "sartocrates", "nikita", "metabananas", "creeezy", "massurealist", "meltedmindz", "jordan", "garrett", "fivetoads"]);
  // var palette = "test"
  print("palette: " + palette)
  var xoff = 0;
  var strokeColor = random(colors[palette]);
  var coinFlip = random(4);
  // var coinFlip = 3.4
  // print(coinFlip)
  if (coinFlip < 0.2) {
    print("symmetry: none")
  } else if (coinFlip < 2) {
    print("symmetry: +");
  } else if (coinFlip < 3.5) {
    print("symmetry: x");
  } else {
    print("symmetry: x+");
  }
  for (var j = 0; j < (canvasSize/scl) + 1; j++) {
    var yoff = 0;
    for (var k = 0; k < (canvasSize/scl) + 1; k++) {
      var index = floor(noise(xoff, yoff) * colors[palette].length);
      if (scl > 10) {
        // var strokeColor = random(colors[palette]);
        stroke(strokeColor.hue, strokeColor.sat, strokeColor.light);
      } else {
        noStroke()
      }
      fill(colors[palette][index].hue, colors[palette][index].sat, colors[palette][index].light);

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
    xoff += inc;
  }
  
  // addTexture(0, 0, canvasSize, canvasSize, 0.03);
  
  var checkersInc = 0.02;
  var aoff = 1723;
  for (var a = 0; a < (canvasSize/checkersScl) + 1; a++) {
    var boff = 1723;
    for (var b = 0; b < (canvasSize/checkersScl) + 1; b++) {
      if (noise(aoff, boff) > 0.82) {
        if (a % 2 == b % 2) {
          fill(colors[palette][0].hue, colors[palette][0].sat, colors[palette][0].light);
          // fill(0, 0, 0, 0.6);
          rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
        } else {
          fill(colors[palette][colors[palette].length-1].hue, colors[palette][colors[palette].length-1].sat, colors[palette][colors[palette].length-1].light);
          // fill(0, 0, 100, 0.6);
          rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
        }
      }
      boff += checkersInc;
    }
    aoff += checkersInc;
  }
}

function addTexture(x, y, w, h, opacity) {
  for (var b = 0; b < w * h * 3; b++) {
    fill(random(360), 60, 60, opacity);
    noStroke();
    ellipse(
      random(x, x+w),
      random(y, y+h),
      2,
      2
    );
  }
}
