"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let step = 50;

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}



function drawWormhole() {
    let i = 0;
    while (i<=24) {
        Utils.drawLine(50+(i*step)/4, 50, 350-(i*step)/4, 350);
        Utils.drawLine(50, 350-(i*step)/4, 350, 50+(i*step)/4);
        i++;
    }
}

