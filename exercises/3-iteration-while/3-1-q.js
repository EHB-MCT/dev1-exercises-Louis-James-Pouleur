"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while (1<=5) {
        let colour = 0+50*i;
        context.fillStyle = Utils.rgb(colour, colour, colour);
        let radius = 150-25*i;
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;
    }
}