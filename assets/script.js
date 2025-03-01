// board
var blockSize = 25;
var rows = 25;
var columns = 25;
var board;
var context;

// Snake Head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = rows * blockSize;
    context = board.getContext("2d");
    
    placeFood();
    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
}

function placeFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}