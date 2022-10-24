"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

drawGrid();

function drawGrid() {
    let i = 1;
    while (i < 7) {
        //let x = ;
        //let y = x;
        Utils.drawLine(75, 25 + i * 50, 325, 25 + i * 50);
        Utils.drawLine(25 + i * 50, 75, 25 + i * 50, 325);
        i += 1;
    }
}