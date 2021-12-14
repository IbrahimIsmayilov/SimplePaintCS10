// Simple Paint

// Set up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseIsPressed = false
let mouseX, mouseY, pmouseX, pmouseY;
let size = 5;
let penColor = "black";

ctx.lineCap = "round";

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {

    // Draw a circle if mouseIsPressed
    if (mouseIsPressed) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth  = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
    }

    requestAnimationFrame(loop);
}

// Document Event Stuff
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
    // Save previous mouseX and mouseY
    pmouseX = mouseX;
    pmouseY = mouseY;

    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect()
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
    // console.log(event);
}

function keydownHandler(event) {
    console.log(event.code)

    if (event.code === "Space") { /// use three equals recommended means string data can only  equal string and so forth very strict 2== means string data can equal string and number data
        // Draw a background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
    } else if (event.code === "ArrowUp") {
        size++;
    } else if (event.code === "ArrowDown") {
        size--;
    } else if (event.code === "Digit1") {
        penColor = "red";
    } else if (event.code === "Digit2") {
        penColor = "green";
    } else if (event.code === "Digit3") {
        penColor = "blue";
    }
}

// Button Events
document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);

function setRed() {
    penColor = "red";
}

function setGreen() {
    penColor = "green";
}

function setBlue() {
    penColor = "blue";
}