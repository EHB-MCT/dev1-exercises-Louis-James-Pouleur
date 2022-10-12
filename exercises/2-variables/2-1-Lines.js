"use strict"

//aanmaak canvas + context

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width
let height = context.canvas.height
let margin = 300
let y = 100
drawMoreLines();

function drawMoreLines(){
    context.beginPath();
    context.moveTo(width/2 - margin, y);
    context.lineTo(width/2 + margin, y);
    context.lineTo(width/2 - margin, y*2);
    context.lineTo(width/2 + margin, y*2);
    context.lineTo(width/2 - margin, y*3);
    context.lineTo(width/2 + margin, y*3);
    context.lineTo(width/2 - margin, y*4);
    context.lineTo(width/2 + margin, y*4);
    context.lineTo(width/2 - margin, y*5);
    context.lineTo(width/2 + margin, y*5);
    context.lineTo(width/2 - margin, y);
    context.stroke();
}