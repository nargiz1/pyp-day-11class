"use strict"

Number.prototype.add = function(x){
    return this+x
}
Number.prototype.substract = function(x){
    return this-x
}
Number.prototype.divide = function(x){
    return this/x
}
Number.prototype.multiply = function(x){
    return this*x
}


const result = (5).add(3).substract(4).divide(2).multiply(10);

console.log(result); //20
