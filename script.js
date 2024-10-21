const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    //value written on input box is empty
    alert("You Must Write Something");
  } else {
    /* dynamically adding new list item to list container .
      1.create a list item (li)
      2.li contains the text  entered 
      3.add li to listContainer
*/
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //  x icon for delete
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // empty the input box
  inputBox.value = "";
  //when ever add task saveData will be called
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    //when you click on li , the checked class is toggled , which mark the task strike/not to strike
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      //when ever task is checked or unchecked saveData to be called
      saveData();

      //when clicked on span , the parent li is removed from DOM , deleting the task from list
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      //when ever task is deleted saveData to be called
      saveData();
    }
  },
  false
);

function saveData() {
  // wt ever content is in the listcontainer the stored in the name of data
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
