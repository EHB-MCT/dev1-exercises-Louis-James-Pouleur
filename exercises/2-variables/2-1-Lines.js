

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width
let height = context.canvas.height
let margin = 300

drawLines();

function drawLines(width, height)
{
    context.beginPath();
    context.moveTo(width/2 - margin, 100);
    context.lineTo(width/2 - margin, 100);
    context.stroke();
    
}