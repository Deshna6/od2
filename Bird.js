img ="";
status = "";
objects = [];

function preload(){
    img = loadImage('Bird.jpg');
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log('Model Loaded');
    status = true;
   
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        objects = results;
    }
}


function draw(){

        fill("#FF0000");
        text("Bird", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 60, 450, 350);

    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
                         
        for (i = 0 ; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects Detected are :" + objects.length;
        
        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);

        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke(r,g,b);

        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}
