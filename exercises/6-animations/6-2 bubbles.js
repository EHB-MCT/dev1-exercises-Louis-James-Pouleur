"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvad.height;

drawBubbles();

function drawBubbles(){
    for(let i = 0; i<1000; i++)  {
        let x =Utils.randomNumber(0, width);
        let y =Utils.randomNumber(0, height);
        let radius =Utils.randomNumber(5, 100);
        let hue = Utils.randomNumber (100, 240);
        drawBubbles(x, y, radius, hue);
        requestAnimationFrame(drawBubbles);
    }
}


function drawBubbles(x, y, radius, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, radius);
    context.fillStyle = Utils.hsl(hue, 50, 75);
    Utils.fillCircle(x + radius / 3, y - radius / 3, radius /4);
}