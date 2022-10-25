"use strcit";

import context from "./context.js";

/**
 * 
 * @param {Number} x1 X coordinate of starting point 
 * @param {Number} y2 Y coordinate of starting point 
 * @param {Number} x2 X coordinate of End point 
 * @param {Number} y2 Y coordinate of End point 
 */


export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function strokeCircle(x, y, rad,) {
    context.beginPath();
    context.ellipse(x, y, rad, rad, 0, 0, Math.PI*2);
    context.stroke();
    
}


export function rgb(r, g, b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function fillAndStrokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2)
    context.stroke();
    context.fill();
}

export function fillAndStrokeEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2)
    context.stroke();
     context.fill();
}