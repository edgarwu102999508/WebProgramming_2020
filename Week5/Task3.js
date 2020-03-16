// Task 3
let num3 = document.querySelector(".num3");
let num4 = document.querySelector(".num4");
let dropDown = document.querySelector("#formula");
let result2 = document.querySelector(".result2");
const btnResult2 = document.querySelector(".getResult2");

btnResult2.addEventListener("click", function(e) {
  if (dropDown.options[dropDown.selectedIndex].value === "plus") {
    result2.innerHTML = parseInt(num3.value) + parseInt(num4.value);
  } else if (dropDown.options[dropDown.selectedIndex].value === "minus") {
    result2.innerHTML = parseInt(num3.value) - parseInt(num4.value);
  } else if (dropDown.options[dropDown.selectedIndex].value === "multiply") {
    result2.innerHTML = parseInt(num3.value) * parseInt(num4.value);
  } else if (dropDown.options[dropDown.selectedIndex].value === "divide") {
    result2.innerHTML = parseInt(num3.value) / parseInt(num4.value);
  } else {
    alert("Opps!!!!");
  }
});
