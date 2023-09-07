let canvasSize = 1000;

let colors = {
  bw: [
    {hue: 0, sat: 0, light: 100},
    {hue: 0, sat: 0, light: 0},
  ],
  user1723: [
    {hue: 0, sat: 0, light: 15},
    {hue: 205, sat: 20, light: 84},
    {hue: 212, sat: 14, light: 46},
    {hue: 0, sat: 0, light: 0},
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
    {hue: 349, sat: 91, light: 95},
    {hue: 108, sat: 47, light: 55},
    {hue: 48, sat: 57, light: 53}
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
  test: [
    {hue: 0, sat: 0, light: 0},
    {hue: 0, sat: 0, light: 10},
    {hue: 0, sat: 0, light: 20},
    {hue: 0, sat: 0, light: 30},
    {hue: 0, sat: 0, light: 40},
    {hue: 0, sat: 0, light: 50},
    {hue: 0, sat: 0, light: 60},
    {hue: 0, sat: 0, light: 70},
    {hue: 0, sat: 0, light: 80},
    {hue: 0, sat: 0, light: 90},
    {hue: 0, sat: 0, light: 100},
  ],
  adamstarr: [
    {hue: 213, sat: 40, light: 59},
    {hue: 358, sat: 72, light: 71},
    {hue: 59, sat: 96, light: 89},
    {hue: 47, sat: 98, light: 51},
    {hue: 353, sat: 84, light: 44},
    {hue: 235, sat: 46, light: 29},
    {hue: 0, sat: 0, light: 100},
    {hue: 0, sat: 0, light: 0}
  ],
  rouge: [
    {hue: 0, sat: 87, light: 20},
    {hue: 359, sat: 84, light: 27},
    {hue: 359, sat: 82, light: 24},
    {hue: 358, sat: 73, light: 33},
    {hue: 358, sat: 76, light: 30},
    {hue: 358, sat: 70, light: 40},
    {hue: 358, sat: 74, light: 36},
    {hue: 358, sat: 72, light: 43},
    {hue: 358, sat: 73, light: 41},
    // {hue: 2, sat: 91, light: 67},
    {hue: 358, sat: 72, light: 47},
    {hue: 356, sat: 76, light: 48},
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
  colorMode(HSL);
  createCanvas(canvasSize, canvasSize);
  let scl = random([1, 2, 5, 10]);
  let checkersScl = random([5, 10, 20]);
  
  var fibonacciFactor = random([55, 89, 144, 233, 377, 610]);
  var inc = scl / fibonacciFactor;
  var palette = random(["user1723", "mleejr", "kiki", "johnnycash424", "skittles", "codincowboy", "gallwas", "seacasa", "sartocrates", "nikita", "metabananas"]);
  // var palette = "bw"
  var xoff = 0;
  var strokeColor = random(colors[palette]);
  for (var j = 0; j < (canvasSize/scl)/2 + 1; j++) {
    var yoff = 0;
    for (var k = 0; k < (canvasSize/scl)/2 + 1; k++) {
      var index = floor(noise(xoff, yoff) * colors[palette].length);
      noStroke()
      // var strokeColor = random(colors[palette]);
      // stroke(strokeColor.hue, strokeColor.sat, strokeColor.light);
      fill(colors[palette][index].hue, colors[palette][index].sat, colors[palette][index].light);
      rect(scl*j, scl*k, scl, scl);
      rect(canvasSize-scl-scl*j, scl*k, scl, scl);
      rect(scl*j, canvasSize-scl-scl*k, scl, scl);
      rect(canvasSize-scl-scl*j, canvasSize-scl-scl*k, scl, scl);
      yoff += inc;
    }
    xoff += inc;
  }
  
  // addTexture(0, 0, canvasSize, canvasSize, 0.03);
  
  var checkersInc = 0.1;
  var aoff = 1723;
  for (var a = 0; a < (canvasSize/checkersScl) + 1; a++) {
    var boff = 1723;
    for (var b = 0; b < (canvasSize/checkersScl) + 1; b++) {
      if (noise(aoff, boff) > 0.75) {
        if (a % 2 == b % 2) {
          fill(colors[palette][0].hue, colors[palette][0].sat, colors[palette][0].light);
          // fill(0, 0, 0, 0.6);
          // rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
        } else {
          fill(colors[palette][colors[palette].length-1].hue, colors[palette][colors[palette].length-1].sat, colors[palette][colors[palette].length-1].light);
          // fill(0, 0, 100, 0.6);
          // rect(checkersScl*a, checkersScl*b, checkersScl, checkersScl);
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

function draw() {
}