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
    createList.className = 'checked' // Added a Class Name for simplicity manager your CURD Operation
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

// let close = document.querySelectorAll(".fa-times");
// close.forEach((value, index) => {
//   close[index].addEventListener("click", removeLi);
//   function removeLi() {
//     console.log(value);
//   }
// });



// Solved 
let close = document.querySelector(".underList"); // Edit

close.addEventListener('click', function (event) {
  // contains mains = যদি আমার parent - এর ভিতরে ক্লিক করা হয় তাহলে আমি true or false return করব।
  // example
  console.log(this.contains(event.target)) // ul  এর যেখানে ক্লিক করবেন সেই খানটাই দেখাবে?
  // আমি নিচে কিছু লজিক লিখে delegation টা আটকিয়েছি।

  // এটা অন্য ভাবেও করা যাবে আপনি এখানে যে ভাবে প্লেনিং করেছেন সেটা এই লজিক দিয়েই বেস্ট। 

// line number 21 add code see

  // সমস্যা থাকলে আমাকে বলবেন।
  if (this.contains(event.target)) {
    if ([...event.target.classList].includes('checked')) {
      event.target.remove()
    }else if ([...event.target.classList].includes('fa-times')) {
      console.log(event.target.parentElement.remove())
    }
  }
})