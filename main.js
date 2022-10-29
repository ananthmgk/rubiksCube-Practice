const img1 = new Image(350,350);
const img2 = new Image(350,350);

img1.src = 'https://4.imimg.com/data4/HG/DB/MY-3235685/ff0000-png-500x500.png';
img2.src = 'https://5.imimg.com/data5/XK/MS/IA/SELLER-3526182/sunset-yellow-colour-500x500.png';

const canvasXSize = 350;
const canvasYSize = 350;

const speed = 10; // lower is faster
const scale = 1.05; 

const distanceToMove = 3.75;
let img1W;
let img1H;
let img2W;
let img2H;
let x = 0;
let y = 0;
let ctx;

img1W = img1.width * scale;
img1H = img1.height * scale;
img2W = img2.width;

window.onload = function() {
    ctx = document.getElementById('canvas').getContext('2d');
    let leftButton = document.getElementById("left-btn")
    let rightButton = document.getElementById("right-btn")
    let topButton = document.getElementById("top-btn")
    let bottomButton = document.getElementById("bottom-btn")

    leftButton.addEventListener("click", img1.onload = () => {
        ctx.drawImage(img1, x, y, img1W, img1H);
        let startInterval = setInterval(leftMove, speed);
        return startInterval;
    });

    rightButton.addEventListener("click", img1.onload = () => {
        let startInterval = setInterval(rightMove, speed);
        return startInterval;
    });

    topButton.addEventListener("click", img1.onload = () => {
        let startInterval = setInterval(topMove, speed);
        return startInterval;
    });

    bottomButton.addEventListener("click", img1.onload = () => {
        let startInterval = setInterval(bottomMove, speed);
        return startInterval;
    });
};

function stopMove() {
    clearInterval(startInterval);
};

function rightMove() {
    ctx.clearRect(0, 0, canvasXSize, canvasYSize);

    if(x > canvasXSize - img1W) {
        ctx.drawImage(img2, x - img1W + 1, y, img1W, img1H);
    }

    ctx.drawImage(img1, x, y, img1W, img1H);

    x += distanceToMove;

    if(img2W === canvasXSize) {
        stopMove();
      }
}

function leftMove() {
    ctx.clearRect(0, 0, canvasXSize, canvasYSize);

    if(x < canvasXSize - img1W) {
        ctx.drawImage(img2, x + img1W + 1, y, img1W, img1H);
    }

    ctx.drawImage(img1, x, y, img1W, img1H);

    x -= distanceToMove;

    if(img2W === canvasXSize) {
        stopMove();
      }
}

function topMove() {
    ctx.clearRect(0, 0, canvasXSize, canvasYSize);

    if(y < canvasYSize - img1H) {
        ctx.drawImage(img2, x, y + img1H + 1, img1W, img1H);
    }

    ctx.drawImage(img1, x, y, img1W, img1H);

    y -= distanceToMove;

    if(img2W === canvasYSize) {
        stopMove();
      }
}

function bottomMove() {
    ctx.clearRect(0, 0, canvasXSize, canvasYSize);

    if(y > canvasYSize - img1H) {
        ctx.drawImage(img2, x, y - img1H + 1, img1W, img1H);
    }

    ctx.drawImage(img1, x, y, img1W, img1H);

    y += distanceToMove;

    if(img2W === canvasYSize) {
        stopMove();
      }
}
