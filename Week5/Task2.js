// // Task 2
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let result = document.querySelector(".result");
const btnResult = document.querySelector(".getResult");

btnResult.addEventListener("click", function(e) {
  result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
});
