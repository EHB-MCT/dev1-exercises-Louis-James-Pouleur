"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;





setup();

function setup(){
    let numbers = [];

    for(let i = 0; i < 1000; i++){
        numbers[i] = Utils.randomNumber(0, 100);
    }
    console.log(calculateAverage(numbers));
}


function calculateAverage(list){
    //average berekenen
    let som = 0;
    for(let i = 0; i < list.length; i++){
        som += list[i];
    }

   return som/list.length;
}





/*
let number = [List];

List();

function List(){
    for (let i = 0; i < 100; i++) {
        Utils.randomNumber(1, 1000);
        
        console.log(number[i]);
    }
}
*/

/*
number();

function number(){
    for(let i = 0; i < 1000; i++){
        number[1, 100] = i;
    }
    let value = number[1, 100];
        console.log(value);  
}
*/

/*
calculateAverage();

function calculateAverage() {
    for(let i = 0; i < 100; i++){
        console.log;
    }
}
*/


