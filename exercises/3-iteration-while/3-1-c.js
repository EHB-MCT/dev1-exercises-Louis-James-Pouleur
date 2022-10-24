"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 1;
        Utils.drawLine(0, 150 + i * 20, 350, 150 + i * 20);
        Utils.drawLine(155 + i * 20, 0, 155 + i * 20, 350);
        i += 1;
    }
}