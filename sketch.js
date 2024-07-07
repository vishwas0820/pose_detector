/*let capture;
let posenet;
let singlePose;
let noseX,noseY;
let leyeX,leyeY;
let reyeX,reyeY;
let skeleton;
function setup(){
    createCanvas(800,500);
    //console.log('Setup function');
    capture=createCapture(VIDEO)
    capture.hide();
    posenet=ml5.poseNet(capture ,modelLoaded);
    posenet.on('pose',receivedPoses);
}
function receivedPoses(poses)
{
   console.log(poses);
   
    
  
   if(poses.length>0){
    singlePose=poses[0].pose;
    skeleton=poses[0].skeleton;
    /*noseX=singlePose.nose.x;
    noseY=singlePose.nose.y;
    leyeX=singlePose.leftEye.x;
    leyeY=singlePose.leftEye.y;
    reyeX=singlePose.rightEye.x;
    reyeY=singlePose.rightEye.y;
   }
   console.log(leyeX+" "+leyeY+" "+reyeX+" "+reyeY);
   console.log(noseX+" "+noseY );   
}
/*function getRandomArbitary(min,max)
{
    return Math.random()*(max-min)+min;
}*/
//function modelLoaded()
//{
  //  console.log('Model has loaded');
//}
//function draw(){
    //r=getRandomArbitary(0,255);
    //g=getRandomArbitary(0,255);
    //b=getRandomArbitary(0,255);
    //background(200);
    //fill(240,121,34);
    //triangle(111,111,111,222,222,111);
    //rect(400,100,150,200);
    /*console.log('draw');
    fill(r,g,b);
    ellipse(mouseX,mouseY,50,50);
    rect(mouseX,mouseY,10,20);
    image(capture,0,0);
    if(singlePose){
    for(let i=0;i<singlePose.keypoints.length;i++)
    {
        ellipse(singlePose.keypoints[i].positon.x,singlePose.keypoints[i].positon.y,10);
    }for(let j=0;j<skeleton.length;j++)
    {
        line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
    }
    }

    
}*/


/*
let capture;
let posenet;
let singlePose;
let noseX, noseY;
let leyeX, leyeY;
let reyeX, reyeY;
let skeleton;
let image;
function setup() {
  createCanvas(800, 500);
  capture = createCapture(VIDEO);
  capture.hide();
  posenet = ml5.poseNet(capture, modelLoaded);
  posenet.on('pose', receivedPoses);
}

function receivedPoses(poses) {
  console.log(poses);

  if (poses.length > 0) {
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
    
    noseX = singlePose.keypoints[0].position.x;
    noseY = singlePose.keypoints[0].position.y;
    
    leyeX = singlePose.keypoints[1].position.x;
    leyeY = singlePose.keypoints[1].position.y;
    
    reyeX = singlePose.keypoints[2].position.x;
    reyeY = singlePose.keypoints[2].position.y;
  }
  
  console.log(leyeX + " " + leyeY + " " + reyeX + " " + reyeY);
  console.log(noseX + " " + noseY);
}

function modelLoaded() {
  console.log('Model has loaded');
}

function draw() {
  image(capture, 0, 0);
  fill(100,20,200);
  
  if (singlePose) {
    for (let i = 0; i < singlePose.keypoints.length; i++) {
      ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 10);
    }
    
    for (let j = 0; j < skeleton.length; j++) {
        stroke(255,255,255);
        strokeWeight(2);
      line(
        skeleton[j][0].position.x, skeleton[j][0].position.y,
        skeleton[j][1].position.x, skeleton[j][1].position.y
      );
    }
  }
}  


*/


let posenet;
let singlePose;
let noseX, noseY;
let leyeX, leyeY;
let reyeX, reyeY;
let skeleton;
let image;

function preload() {
  // Load your image here
  image = loadImage('ujwal1.jpg');
}

function setup() {
  createCanvas(image.width, image.height);
  posenet = ml5.poseNet(modelLoaded);
  posenet.on('pose', receivedPoses);
}

function receivedPoses(poses) {
  console.log(poses);

  if (poses.length > 0) {
    singlePose = poses[0].pose;
    skeleton = poses[0].skeleton;
    
    noseX = singlePose.keypoints[0].position.x;
    noseY = singlePose.keypoints[0].position.y;
    
    leyeX = singlePose.keypoints[1].position.x;
    leyeY = singlePose.keypoints[1].position.y;
    
    reyeX = singlePose.keypoints[2].position.x;
    reyeY = singlePose.keypoints[2].position.y;
  }
  
  console.log(leyeX + " " + leyeY + " " + reyeX + " " + reyeY);
  console.log(noseX + " " + noseY);
}

function modelLoaded() {
  console.log('Model has loaded');
  posenet.singlePose(image);
}

function draw() {
  image(image, 0, 0);
  fill(100, 20, 200);
  
  if (singlePose) {
    for (let i = 0; i < singlePose.keypoints.length; i++) {
      ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 10);
    }
    
    for (let j = 0; j < skeleton.length; j++) {
      stroke(255, 255, 255);
      strokeWeight(2);
      line(
        skeleton[j][0].position.x, skeleton[j][0].position.y,
        skeleton[j][1].position.x, skeleton[j][1].position.y
      );
    }
  }
}

