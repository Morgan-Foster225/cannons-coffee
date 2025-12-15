let container = document.querySelector(".container");
let form = document.querySelector("#form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());
  console.log(dataObj);

  let name = dataObj.yourname;
  let email = dataObj.user_email;
  let phone = dataObj.phone;
  let comments = dataObj.excited;
  let flavor = dataObj.coffee;

  // Get selected radio button
  let choiceRadio = form.querySelector('input[name="choice"]:checked');
  let choiceText = choiceRadio ? choiceRadio.parentElement.textContent.trim() : '';

  let thankYouPara = document.createElement("p");
  thankYouPara.textContent = `Thank you ${name}! We appreciate your interest in ${choiceText}. 
Your favorite coffee flavor is ${flavor}, and your comments are "${comments}". 
We will soon contact you at ${email} or ${phone}.`;

  container.appendChild(thankYouPara);

  form.reset();
  form.style.display = "none";
}
