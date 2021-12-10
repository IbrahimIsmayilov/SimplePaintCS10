// Simple Paint

// Set up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseIsPressed = false;
let mouseX, mouseY;


// Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {


    // Draw a circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler)
document.addEventListener("keydown", keydownHandler)

function mousedownHandler(event) {
    mouseIsPressed = true;
}

function mouseupHandler() {
    mouseIsPressed = false;
}

function mousemoveHandler(event) {
    let cnvRect = cnv.getBoundingClientRect()
    console.log(cnvRect);
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    // console.log(event);
}

function keydownHandler(event) {
    if (event.code === "Space") { /// use three equals recommended means string data can only     equal string and so forth very strict 2== means string data can equal string and number data
        // Draw a background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
    }
}