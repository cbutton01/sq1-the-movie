var canvas = document.getElementById("the-canvas");
var canvasCtx = canvas.getContext("2d");
var screenW = canvas.width = window.innerWidth;
var screenH = canvas.height = window.innerHeight;

var alan = new Image();
alan.src = 'img/alan.jpg';
var byron = new Image();
byron.src = 'img/byron.jpg';
var carlos = new Image();
carlos.src = 'img/carlos.jpg';
var cole = new Image();
cole.src = 'img/cole.jpg';
var david = new Image();
david.src = 'img/david.jpg';
var donica = new Image();
donica.src = 'img/donica.jpg';
var erica = new Image();
erica = 'img/erica.jpg';
var gabriel = new Image();
gabriel.src = 'img/gabriel.jpg';
var haley = new Image();
haley.src = 'img/haley.jpg';
var jeremy = new Image();
jeremy.src = 'img/jeremy.jpg';
var kaena = new Image();
kaena.src = 'img/kaena.jpg';
var kaylen = new Image();
kaylen.src = 'img/kaylen.jpg';
var keith = new Image();
keith.src = 'img/keith.jpg';
var kurtis = new Image();
kurtis.src = 'img/kurtis.jpg';
var monnie = new Image();
monnie.src = 'img/monnie.jpg';
var rachel = new Image();
rachel.src = 'img/rachel.jpg';
var raelyn = new Image();
raelyn.src = 'img/raelyn.jpg';
var ryanB = new Image();
ryanB.src = 'img/ryan_b.jpg';
var ryanA = new Image();
ryanA.src = 'img/ryan_a.jpg';
var zach = new Image();
zach.src = 'img/zach.jpg';

window.onload = function (){
    animate();
}

function drawRect(x, y, height, width, color){
    canvasCtx.fillStyle = color;
    canvasCtx.fillRect(x, y, height, width);
}

function drawText(text, x, y, maxWidth) {
    canvasCtx.fillStyle = 'white';
    canvasCtx.font = '48px monospace';
    canvasCtx.fillText(text, x, y, maxWidth);
}

function Character(image, actor, persona){
    drawText(actor, (screenW/2) -50 , (screenH/2) - 100, 300);
    canvasCtx.drawImage(image, (screenW/2) - 100, screenH/2, image.naturalWidth, 300);
    drawText('as', (screenW/2) - 50, (screenH/2) - 40, 100);
    drawText(persona, (screenW/2) - 50, (screenH/2) - 10, 400);
}



function animate() {
    requestAnimationFrame(animate);
    canvasCtx.clearRect(0,0, screenW, screenH);
    drawRect(0, 0, screenW, screenH, 'black');
}