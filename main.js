objects = [];
status = "";

function preload(){

}

function setup() {
    canvas = createCanvas(410, 350);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(410, 350);
  video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }

function draw(){
    image(video, 0 ,0, 410, 350);
}