"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    while (i <= 14) {
        let gray = 250-50*i;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50+25*i, 50+15*i, 10, 350-25*i);
        i++;
    }
}