let input = document.querySelector("input");
let clearBtn = document.querySelector("#delete");
let plusMinus = document.querySelector("#plus-minus");
let percentage = document.querySelector("#percentage");
let division = document.querySelector("#division");
let multiply = document.querySelector("#multiply");
let substract = document.querySelector("#substract");
let plus = document.querySelector("#plus");
let comma = document.querySelector("#comma");
let equals = document.querySelector("#equals");

let nums = document.querySelectorAll(".num");

let firstValue;
let secondValue;
let operation;

// input.addEventListener("keyup", function(){
//     if(isNaN(Number(input.value))){
//         input.value=''
//     }
// })

nums.forEach((num) => {
  num.addEventListener("click", function () {
    input.value += this.value;
    if (operation) {
      secondValue = input.value;
    } else {
      firstValue = input.value;
    }
  });
});

clearBtn.addEventListener("click", function(){
    input.value = "";
    operation = '';
    firstValue = '';
    secondValue = '';
})

plus.addEventListener("click", function () {
  input.value = "";
  operation = "+";
});
substract.addEventListener("click", function () {
  input.value = "";
  operation = "-";
});
multiply.addEventListener("click", function () {
  input.value = "";
  operation = "*";
});
division.addEventListener("click", function () {
  input.value = "";
  operation = "/";
});

percentage.addEventListener("click", function(){
    let num = Number(input.value);
    input.value = num/100
})

comma.addEventListener("click", function(){
    let num = Number(input.value);
    input.value = `${num}.`
})
plusMinus.addEventListener("click", function(){
    let num = Number(input.value);
    input.value = -num
})


equals.addEventListener("click", function () {
  if (operation === "+") {
    firstValue = Number(firstValue) + Number(secondValue);
    input.value = firstValue
  }else if(operation === "-"){
    firstValue = Number(firstValue) - Number(secondValue);
    input.value = firstValue
  }else if(operation === "*"){
    firstValue = Number(firstValue) * Number(secondValue);
    input.value = firstValue
  }else if(operation === "/"){
    firstValue = Number(firstValue) / Number(secondValue);
    input.value = firstValue
  }
});
