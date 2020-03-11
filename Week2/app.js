// Current date format
const todayDate = new Date();
let options = {
  month: "long",
  day: "numeric",
  year: "numeric"
};

let dateMonth = {
  month: "long"
};

const newDate = new Intl.DateTimeFormat("en-US", options).format(todayDate);
const showMonth = new Intl.DateTimeFormat("en-US", dateMonth).format(todayDate);

// Get current date
let postDate = document.querySelector(".today-date");
postDate.textContent = newDate;

const addCal = document.querySelector(".addSlot");
const calList = document.querySelector(".cal-list");

addCal.addEventListener("click", onClick);
function onClick(e) {
  // Create li element
  const li = document.createElement("li");

  // Add class
  li.className = "list";

  // Create date section
  const dateCal = document.createElement("div");
  dateCal.className = "date";
  const month = document.createElement("h3");
  month.textContent = showMonth;
  const date = document.createElement("h2");
  date.textContent = todayDate.getDate();

  // Append date to date section
  dateCal.appendChild(month);
  dateCal.appendChild(date);

  // Create event description
  const eventDesc = document.createElement("p");
  eventDesc.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime rerum quo tempora voluptatibus reiciendis perspiciatis provident sint illo est facilis? ";

  // Append date & event description to li
  li.appendChild(dateCal);
  li.appendChild(eventDesc);

  // Append li to ul
  calList.appendChild(li);

  e.preventDefault();
}
