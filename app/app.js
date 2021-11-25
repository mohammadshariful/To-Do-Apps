let allList = document.querySelectorAll("li");

/*add input items */
let button = document.querySelector(".btn");
button.addEventListener("click", addItems);

function addItems(e) {
  //select where I push my element
  e.preventDefault();
  let inputValue = document.querySelector(".input-feild").value;
  if (inputValue === "") {
    alert("Please give some text");
  } else if (!isNaN(inputValue)) {
    alert("Please give some text");
  } else {
    let underList = document.querySelector(".underList");

    //functional work

    let createList = document.createElement("li");
    //for check
    let span1 = document.createElement("span");
    span1.className = "fas fa-check";
    createList.appendChild(span1);

    let text1Value = document.createTextNode(inputValue);
    createList.appendChild(text1Value);

    //for times
    let span2 = document.createElement("span");
    span2.classList = "fas fa-times";
    createList.appendChild(span2);
    underList.appendChild(createList);
    document.querySelector(".input-feild").value = "";
  }
}
//close item

let close = document.querySelectorAll(".fa-times");
close.forEach((value, index) => {
  close[index].addEventListener("click", removeLi);
  function removeLi() {
    console.log(value);
  }
});
