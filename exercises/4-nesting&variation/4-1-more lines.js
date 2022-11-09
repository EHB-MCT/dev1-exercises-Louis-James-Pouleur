"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = 600;
let height = 300;

drawRect();
function drawRect(){
    context.fillStyle = "#F58800";
    context.fillRect(0,0, width, height);
  
}

context.strokeStyle = "white";


drawLines();

function drawLines() {

    let step = 10;
    let amounnt = 600 / step;

    for(let i = 0; i <= amounnt; i++) {
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }
}




drawLines2();
function drawLines2(){
    let step = 10;
    let amounnt = height/step;
    for(let i = 0; i <= amounnt; i++) {
        Utils.drawLine(0, 0+step * i, width, height - (step * i));
    }
}

