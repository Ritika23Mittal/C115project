nosex="";
nosey="";
function preload(){
}

function setup(){
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on("pose",gotResult);
}

function draw(){
    image(video,0,0,300,300);
}

function modelLoaded(){
    console.log("PoseNet is loaded");
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x = "+nosex +" , nose y = "+nosey);
    }
}

function take_snapshot(){
    save('myFilterImage.png');
}