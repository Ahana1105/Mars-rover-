canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

mars_array = ["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg"]
random_number = Math.floor(Math.random()*4);


var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 100;
var bg_img = mars_array[random_number];
var rover_img = "rover.png";

function add() {
    bg_img_tag = new Image();
    bg_img_tag.onload = upload_bg;
    bg_img_tag.src = bg_img;

    rover_img_tag = new Image();
    rover_img_tag.onload = upload_rover;
    rover_img_tag.src = rover_img;

}

function upload_bg() {
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
console.log(e);
var key_pressed = e.keyCode;

if(key_pressed == '38') {
    up();
}

if(key_pressed == '40') {
    down();
}

if(key_pressed == '37') {
    left();
}

if(key_pressed == '39') {
    right();
}
}

function up() {
    if (rover_y >= 0){
        rover_y-=10;
        console.log(rover_y);
        upload_bg();
        upload_rover();
    }
}


function down() {
    if (rover_y <=500) {
        rover_y+=10;
        console.log(rover_y);
        upload_bg();
        upload_rover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x-=10;
        console.log(rover_x);
        upload_bg();
        upload_rover();
    }
}

function right() {
    if (rover_x <= 800) {
        rover_x+=10;
        console.log(rover_x);
        upload_bg();
        upload_rover();
    }
}