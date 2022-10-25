"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    context.fillStyle = Utils.rgb(190, 190, 190);
    let i = 0;
    while (i<=5) {
        let radius = 150-25*i;
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;
    }
}