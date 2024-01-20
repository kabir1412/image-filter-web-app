noseX = 0;
noseY = 0;
function preload(){
clown_img = loadImage("https://i.postimg.cc/br4W735J/clown.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x-10;
noseY = results[0].pose.nose.y-10;
console.log("nose x is " + noseX);
console.log("nose y is " + noseY);
}

}

function modelLoaded(){
console.log("PoseNet is Loaded.")    
}

function draw(){
image(video,0,0,300,300);
//circle(noseX, noseY, 15);
//fill(140,200,140);
//stroke(255,0,0);
image(clown_img, noseX, noseY, 20, 20);
}

function take_snapshot(){
save("clown.png");
}