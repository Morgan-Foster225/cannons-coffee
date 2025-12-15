let container = document.querySelector(".container");
let form = document.querySelector("#form");


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());
  console.log(dataObj);

  let name = dataObj.yourname;

  const welcomeMsg = document.createElement("p");
  welcomeMsg.textContent = `Welcome, ${name}! You are logged in!`;
  container.appendChild(welcomeMsg);

  form.reset();

  form.style.display = "none";
 }