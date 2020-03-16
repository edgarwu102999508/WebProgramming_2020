// Task 1
const addBtn = document.querySelector("#addNum");
let count = document.querySelector("#count");
let counter = 0;
addBtn.addEventListener("click", function(e) {
  count.innerHTML = counter++;
});
