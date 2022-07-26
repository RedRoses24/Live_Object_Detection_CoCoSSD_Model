img="";
Status="";
objects=[];
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="CoCoSSD is detecting the object(s)";
}
function modelLoaded(){
    console.log("The model is loaded!");
    Status=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        objects=results;
    }
}
function preload(){
    img=loadImage("book.png");
}
function draw(){
    image(img, 0, 0, 600, 500);
    if(Status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Objects Detected";
        fill("red");
        stroke("red");
        noFill();
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+" %", objects[i].x+15, objects[i].y+15);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    }