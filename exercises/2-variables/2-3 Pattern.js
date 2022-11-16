"use strict"

//aanmaak canvas
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let posX = context.canvas.width;
let posY = context.canvas.height;

let sizeX = context.canvas.width;
let sizeY = context.canvas.height;

//rectangles darkblue
drawRect(0, 0, sizeX/ 4, sizeY/ 4);
drawRect(1150, 0, sizeX/ 4, sizeY/ 4);
drawRect(0, 500, sizeX/ 4, sizeY/ 4);
drawRect(1150, 500, sizeX/ 4, sizeY/ 4);

function drawRect(posX, posY, sizeX, sizeY){
    context.fillStyle = "#3597FD";
    context.fillRect(posX, posY, sizeX, sizeY);
}

//rectangles red
drawRect2(0, 215, sizeX, sizeY/ 3,5);

function drawRect2(posX, posY, sizeX, sizeY){
    context.fillStyle = "red";
    context.fillRect(posX, posY, sizeX, sizeY);
}

//rectangles light blue
drawRect3(0, 650, sizeX, sizeY/ 4);

function drawRect3(posX, posY, sizeX, sizeY){
    context.fillStyle = "#41FAF7";
    context.fillRect(posX, posY, sizeX, sizeY);
}

//rectangles green blue
drawRect4(375, 0, sizeX/ 2, sizeY/ 4);
drawRect4(375, 502, sizeX/ 2, sizeY/ 5.75);

function drawRect4(posX, posY, sizeX, sizeY){
    context.fillStyle = "#8FC1B5";
    context.fillRect(posX, posY, sizeX, sizeY);
}