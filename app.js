// Create a "close" button and append it to each list item

let myNodeList = document.querySelectorAll("li");

myNodeList.forEach((element, index) => {
  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  myNodeList[index].appendChild(span);
});
// Click on a close button to hide the current list item
let close = document.querySelectorAll(".close");

close.forEach((element, index) => {
  close[index].onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
  };
});
// Add a "checked" symbol when clicking on a list item

let list = document.querySelector("ul");

function check(e) {
  if ((e.target.tagName = "li")) {
    e.target.classList.add("checked");
  }
}
list.addEventListener("click", check);

// Create a new list item when clicking on the "Add" button
function newElement() {
  let inputValue = document.querySelector("#myInput").value;
  let ulList = document.querySelector("#myUl");
  let li = document.createElement("li");
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("Input can't be empty");
  } else {
    ulList.appendChild(li);
  }
  document.querySelector("#myInput").value = "";
}
