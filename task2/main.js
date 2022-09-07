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

input.addEventListener("input", function (e) {
  console.log("hello");
  if (isNaN(Number(this.value)) && this.value != "-") {
    this.value = "";
  }
  console.log("first value", firstValue);
  console.log("second value", secondValue);
});

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

clearBtn.addEventListener("click", function () {
  input.value = "";
  operation = "";
  firstValue = "";
  secondValue = "";
});

plus.addEventListener("click", function () {
  if (!firstValue) {
    firstValue = input.value;
  }
  input.value = "";
  operation = "+";
});
substract.addEventListener("click", function () {
  if (!firstValue) {
    firstValue = input.value;
  }
  input.value = "";
  operation = "-";
});
multiply.addEventListener("click", function () {
  if (!firstValue) {
    firstValue = input.value;
  }
  input.value = "";
  operation = "*";
});
division.addEventListener("click", function () {
  if (!firstValue) {
    firstValue = input.value;
  }
  input.value = "";
  operation = "/";
});

percentage.addEventListener("click", function () {
  let num = Number(input.value);
  input.value = num / 100;
});

comma.addEventListener("click", function () {
  if (!input.value.includes(".")) {
    let num = Number(input.value);
    input.value = `${num}.`;
  }
});
plusMinus.addEventListener("click", function () {
  let num = Number(input.value);
  input.value = -num;
});

equals.addEventListener("click", function () {
  if (firstValue) {
    if (!secondValue) {
      secondValue = input.value;
    }
    if (operation === "+") {
      firstValue = Number(firstValue) + Number(secondValue);
      secondValue = undefined;
      operation = "";
      input.value = firstValue;
    } else if (operation === "-") {
      firstValue = Number(firstValue) - Number(secondValue);
      secondValue = undefined;
      operation = "";
      input.value = firstValue;
    } else if (operation === "*") {
      firstValue = Number(firstValue) * Number(secondValue);
      secondValue = undefined;
      operation = "";
      input.value = firstValue;
    } else if (operation === "/") {
      firstValue = Number(firstValue) / Number(secondValue);
      secondValue = undefined;
      operation = "";
      input.value = firstValue;
    }
  } else {
    alert("add value");
  }
});
