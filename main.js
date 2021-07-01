img="";
status="";
Objects=[];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting Objects";
}

function preload(){

}

function draw(){
  
image(video,0,0,380,380);
if (status !=  ""){
    r=random(255);
    b=random(255);
    g=random(255);

    objectDetector.detect(video,gotResult);
    for( i=0;i< Objects.length;i++){
        document.getElementById("status").innerHTML="objectDetected";
        document.getElementById("number_of_objects").innerHTML="number of objects are"+Objects.length;

        fill(rgb);
        percent=floor(Objects[i].confidence * 100);
        text(Objects[i].label+ " " +percent + "%",Objects[i].x +15,Objects[i].y +15);
        noFill();
        stroke(rgb);
     rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
    }
}
}
function modelLoaded(){
    console.log(modelLoaded);
    status=true;
   objectDetector.detect(video,gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
Objects=results;
}


























































