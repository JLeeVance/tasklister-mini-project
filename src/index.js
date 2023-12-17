document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#d9d9d9"
  //grabbed the body from the DOM via .js ; set the background color to grey
  const form = document.querySelector("form")
  let textInput = document.querySelector("input[type = text]")
  const button = document.querySelector("input[type = submit]")
  button.style.backgroundColor = "#bfbfbf"
  // console.log(textInput)
  // console.log(button)

const ul1 = document.querySelector("#tasks");
let numList = 1;

function createLi (event) {
  event.preventDefault();
  let newTask = event.target.elements["new-task-description"].value
  // console.log(newTask);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Task";

  const li = document.createElement("li");

  li.textContent = `${numList}. ${newTask}`;
  // console.log(ol);
  ul1.appendChild(li);
  ul1.appendChild(deleteButton);
  numList++;
}



const changeButtonColor = () => button.style.backgroundColor = "white";
const changeButtonColorBack = () => button.style.backgroundColor = "#bfbfbf";


form.addEventListener( "submit" , (event) => createLi(event));
form.addEventListener( "mouseover" , changeButtonColor);
form.addEventListener( "mouseout" , changeButtonColorBack);
  })