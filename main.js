var canvas = document.getElementById("the-canvas");
var canvastCtx = canvas.getContext("2d");
var screenW = window.innerWidth;
var screenH = window.innerHeight;

window.onload = function (){
    drawRect(0,0, screenW, screenH, 'black');
}

function drawRect(x, y, height, width, color){
    canvastCtx.fillStyle = color;
    canvastCtx.fillRect(x, y, height, width);
}