//added h1 tag
drawbox();

function drawbox(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    //red top lef
    context.strokeStyle = "red";
    context.strokeRect(50, 50, 150, 150);

    //red bottom right
    context.strokeStyle = "red";
    context.strokeRect(200, 200, 150, 150);

    //red top right small
    context.strokeStyle = "red";
    context.strokeRect(275, 75, 50, 50);

    //red bottom left small
    context.strokeStyle = "red";
    context.strokeRect(75, 275, 50, 50);

    //center box with outline
    context.lineWidth = 1;
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.fill();
    context.stroke();

    //top right small box
    context.fillStyle = "black";
    context.fillRect(325, 50, 25, 25);

    //bottom left small box
    context.fillStyle = "black";
    context.fillRect(50, 325, 25, 25);


}



