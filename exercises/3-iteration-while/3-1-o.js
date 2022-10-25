"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    while (i <= 300) {
        let gray = 200;
        context.fillStyle = Utils.rgb(0+(i/300*255), 0+(i/300*255), 0+(i/300*255));
        context.fillRect(50+1*i, 50, 300, 300);
        i++;
    }
}