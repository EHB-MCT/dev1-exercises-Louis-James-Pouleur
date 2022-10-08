"use strict";
drawName();

function drawName(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //L
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle ='red';
    context.lineTo(100, 20);
    context.lineTo(100, 100);
    context.lineTo(150, 100);
    context.stroke();

    //O
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle ='green';
    context.lineTo(200, 20);
    context.lineTo(200, 100);
    context.lineTo(250, 100);
    context.lineTo(250, 20);
    context.lineTo(200, 20);
    context.stroke();

    //U
    context.beginPath();
    context.lineWith = 5;
    context.strokeStyle ='yellow';
    context.lineTo(300, 20);
    context.lineTo(300, 100);
    context.lineTo(350, 100);
    context.lineTo(350, 20);
    context.stroke();

    //I
    context.beginPath();
    context.lineWith = 7;
    context.strokeStyle ='blue';
    context.moveTo(400, 20)
    context.lineTo(400, 100);
    context.stroke();

    //S
    context.beginPath();
    context.lineWith = 6;
    context.strokeStyle ='brown';
    context.moveTo(450, 20);
    context.lineTo(500, 20);
    context.lineTo(450, 20);
    context.lineTo(450, 60);
    context.lineTo(500, 60);
    context.lineTo(500, 100);
    context.lineTo(450, 100);
    context.stroke();
}

