// '#4b1328'
// '#5054a4'
let angle = -2;
let angleY = 0;
let direct =1;
// font, text
let myFont;
let myMask;
let tSize;
let ipText = 'YourMomma';
let ttext='zzzzzzz'+ipText+'zzzzzzz';
// graphic
let mText;
let mkText;
let bText;
let maskedImage;
let mCyl;
let bCyl;
let mkCyl;
let mkBg;
// color
let bgColor;
let tColor;
let mkColor;
let mk;
// mouse index 
let x1s;
let x2s;
let y1s;
let y2s;
let xP = 0;
let xTravel;
let drawing = false;

function preload() {
  myMask = loadFont('TNEstraight-Mask.otf');
  myFont = loadFont('TNEstraight-Main.otf');
  }
function setup() {
  

let renderer = createCanvas(windowWidth, windowHeight, WEBGL);
renderer.drawingContext.disable(renderer.drawingContext.DEPTH_TEST);
  ortho();
  smooth();
  frameRate(60);

  // gl = this._renderer.GL;
  // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl = canvas.getContext("webgl", { alpha: false });
  // gl.enable(gl.BLEND);
  // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  tSize = 100;
  tColor = color('#5054a4');
  bgColor = color('#4b1328');
  mkColor = gl.clearColor(255, 255, 255, 10);

  mText = createGraphics(500*PI,200);
  bText = createGraphics(500*PI,200,WEBGL);
  mkText = createGraphics(500*PI,200);
  // mkBg = createGraphics(500*PI,200,WEBGL);
  // mk = createGraphics(500*PI,200,WEBGL);

  // mCyl = createGraphics(500,200);
  // bCyl = createGraphics(500,200);
  // mkCyl = createGraphics(500,200);
  }
 

function draw() {
  
  background(bgColor);
  rectMode(CENTER);
  // translate(-windowWidth / 2, -windowHeight / 2);
 
  // mText.background(0);

  bText.push();
  bText.fill(tColor);
  bText.strokeWeight(0);
  // bText.rotateY(PI);
  bText.textFont(myFont);
  bText.textSize(tSize);
  bText.textAlign(CENTER);
  bText.text(ipText, width/2, 25);
  bText.pop();
  // mText.scale(2,1);
  // mkText.push();
  // mText.background(100,10);
  mkText.strokeWeight(0);
  mkText.fill(bgColor);
  mkText.textFont(myMask);
  mkText.textSize(tSize);
  mkText.textAlign(CENTER);
  mkText.text(ttext, width/2, 125);

  mText.fill(tColor);
  mText.strokeWeight(0);
  mText.textFont(myFont);
  mText.textSize(tSize);
  mText.textAlign(CENTER);
  mText.text(ipText, width/2, 125);


  // img(mk,0,0);
  
  // image(mText,windowWidth/2 -250, windowHeight/2 -250);

  
  if(angle > -1.9)
  {
    direct = -1;
  }
  if (angle < -2.1)
  {
    direct = 1;
  }
  angle += direct*0.003;
  
  // blendMode(DIFFERENCE);
 

  noStroke();
  // rotateX(0.1);
  // stroke(tColor);
  push();
  rotateY(radians(0));
  // rotateX(180-angleY);
  texture(bText);
  cylinder(245,200);
  pop();
  
  // push();
  // rotateY(radians(-180));
  // // rotateX(angleY);
  // texture(mkText);
  // cylinder(250,200);
  // pop();

  // push();
  // rotateY(radians(-180));
  // // rotateX(angleY);
  // texture(mText);
  // cylinder(250,200);
  // pop();
  
  // push();
  
  // rotateY(angle);
  // texture(mText);
  // cylinder(250,200);
  // pop();
  

  // push();
  // rotateY(angle);
  // texture(mText);
  // cylinder(250,200);
  // pop();

 

  // push();
  // rotateY(PI+angle);
  // texture(mText);
  // cylinder(240,200);
  // pop();


 
  
  
  
  // pg.text(ttext, xTravel, 250);
  // maskedImage = pgMask(pg2,pg);
  // image(maskedImage, 0, 0);
  
}
function pgMask(_content,_mask){
  //Create the mask as image
  let img = createImage(500*PI,200,WEBGL);
  img = createGraphics(500*PI,200,WEBGL);
  img.copy(_mask, 0, 0, _mask.width, _mask.height, 0, 0, _mask.width, _mask.height);
  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i += 4) {
    var v = img.pixels[i];
    img.pixels[i] = 0;
    img.pixels[i+1] = 0;
    img.pixels[i+2] = 0;
    img.pixels[i+3] = v;
  }
  img.updatePixels();
  var contentImg = createImage(_content.width,_content.height);
  contentImg.copy(_content, 0, 0, _content.width, _content.height, 0, 0, _content.width, _content.height);
  contentImg.mask(img)
  return contentImg;
}
// function mousePressed() {
//   x1s = x2s = mouseX;
//   y1s = y2s = mouseY;
//   drawing = true;
// }

function mouseDragged() {
  let dragY = map(mouseY, 0, windowWidth, -1, 1 );
  let dragX = map(mouseX, 0, windowWidth, -2.3, -1.7 );
  angle = dragX;
  angleY=dragY;
    x2s = mouseX;
    y2s = mouseY;
}


function mouseReleased() {
  x2s = mouseX;
  y2s = mouseY;
  drawing = false;
}

function rtod(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}