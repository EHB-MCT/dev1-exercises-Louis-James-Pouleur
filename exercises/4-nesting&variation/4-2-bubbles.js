"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width
let height = context.canvas.height

let canvasWidth = width-500
let canvasHeight = height-500
drawBackGround();

function drawBackGround(){
    context.fillStyle = "black"
    context.fillRect(0, 0, width, height);
}

drawBubbles();

function drawBubbles(){
    context.strokeStyle = "transparent";

    for(let i = 0; i < 100; i++){
        let h = Math.random()*255;
        let colour = "hsla("+ h +", 100%, 50%, .5)";
        context.fillStyle = colour;
        Utils.fillAndStrokeCircle(Math.random()*canvasWidth+250, Math.random()*canvasHeight+250, Math.random()*50);
    }
}