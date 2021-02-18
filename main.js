canvas = document.getElementById("myCanvas");

nasa_images = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpeg", "nasa5.jpeg"]

ctx = canvas.getContext("2d");

random_number = Math.floor(Math.random() * 4);

rover_x = 10;
rover_y = 10;

canvas_background = nasa_images[random_number];
rover_character = "rover.png";

console.log(`canvas bg: ${canvas_background}`)

rover_width = 100;
rover_height = 90;

function add() {
    canvas_image = new Image();
    canvas_image.onload = upload_canvas_bg;
    canvas_image.src = canvas_background;


    rover_image = new Image();
    rover_image.onload = upload_rover_image;
    rover_image.src = rover_character;
}

function upload_rover_image() {
    ctx.drawImage(rover_image, rover_x, rover_y, rover_width, rover_height);
}

function upload_canvas_bg() {
    ctx.drawImage(canvas_image, 0, 0, canvas.width, canvas.height);
}


window.addEventListener("keydown", whenkeypress);

function whenkeypress(e) {
    key_value = e.keyCode;

    console.log(key_value);

    if (key_value == "38") {
        console.log("Up arrow pressed");
        up();
    } 
    if (key_value == "39") {
        console.log("Right arrow pressed");
        right();
    }
    if (key_value == "40") {
        console.log("Down pressed")
        down();
    }
    if (key_value == "37") {
        console.log("Left pressed");
        left();
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        console.log(`y value: ${rover_y}`)
        upload_canvas_bg();
        upload_rover_image();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x += 10;
        console.log(`x value: ${rover_x}`);
        upload_canvas_bg();
        upload_rover_image();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log(`y value: ${rover_y}`)
        upload_canvas_bg();
        upload_rover_image();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log(`x value: ${rover_x}`);
        upload_canvas_bg();
        upload_rover_image();
    }
}