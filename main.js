
// const inputs = document.querySelectorAll("input").value;
const addBook = document.getElementById("addBook");
const newBook = document.getElementById("newBook");
const modals = document.querySelector(".modals");
const allBooks = document.querySelector("#allbooks");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

function Book(author,title,pages){
  this.author = author;
  this.title = title;
  this.pages = pages;
  
}


let inputsArr = [];

const addToArr = () => {
  const author = document.getElementById("input1").value;
  const title = document.getElementById("input2").value;
  const pages = document.getElementById("input3").value;

  // e.preventDefault();

  const book1 = new Book(author,title,pages);
  inputsArr.push(book1);
  console.log(inputsArr);
  console.log(book1);
  modals.style.display = "none";
  buttons.style.display = "block";

}
addBook.addEventListener("click",addToArr);
newBook.addEventListener("click",function(){
  modals.style.display = "block";
  // this.style.display = "none";
  // allBooks.style.display = "none";
  // buttons.style.display = "none";

})
allBooks.addEventListener("click",function(){
 inputsArr.forEach(el =>{
  display.textContent = `Author: ${el.author} Title: ${el.title} Pages: ${el.pages}`;
  console.log(`Author: ${el.author} Title: ${el.title} Pages: ${el.pages}`);
 });
 
})

