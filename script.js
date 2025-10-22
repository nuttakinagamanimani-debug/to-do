const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not in what you have, but who you are.",
  "Dream big, work hard, stay humble.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you."
];

const images = [
  "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  "https://cdn-icons-png.flaticon.com/512/4319/4319092.png",
  "https://cdn-icons-png.flaticon.com/512/6195/6195705.png",
  "https://cdn-icons-png.flaticon.com/512/4359/4359723.png",
  "https://cdn-icons-png.flaticon.com/512/4359/4359750.png"
];

const quoteText = document.getElementById("quoteText");
const quoteImage = document.getElementById("quoteImage");
const newQuoteBtn = document.getElementById("newQuote");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
  quoteImage.src = images[randomIndex];
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";

  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
