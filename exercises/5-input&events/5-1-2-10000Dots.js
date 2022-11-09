"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();

function drawBackground(){
    context.fillStyle = "black";
    context.fillRect(0,0, width, height);
}

drawDots();

function drawDots() {
    for(let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        
        if (y < height / 3) {
            context.fillStyle = "blue";

        } else if (y < height && y > height/3*2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        
        Utils.fillAndStrokeCircle(x, y, 2)
    }
}