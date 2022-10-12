"use strict"

//aanmaak canvas + context
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
let random = Math.floor(Math.random() * 500);

//rectangles
drawRect(40, 400);
drawRect(60, 360);
drawRect(80, 320);
drawRect(100, 280);
drawRect(120, 240);
drawRect(140, 200);
drawRect(160, 160);
drawRect(180, 120);
drawRect(200, 80);
drawRect(220, 40);
drawRect(240, 0);

function drawRect(pos, size){
    //kleuren
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";

    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);
    
}


