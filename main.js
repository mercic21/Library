const addBook = document.getElementById("addBook");
const newBook = document.getElementById("newBook");
const modals = document.querySelector(".modals");
const allBooks = document.querySelector("#allbooks");
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

let inputsArr = [];

const addToArr = () => {
  const author = document.getElementById("input1").value;
  const title = document.getElementById("input2").value;
  const pages = document.getElementById("input3").value;

  const book1 = new Book(author, title, pages);
  inputsArr.push(book1);
  console.log(inputsArr);
  console.log(book1);

  modals.style.display = "none";
  buttons.style.display = "block";
};

addBook.addEventListener("click", addToArr);
newBook.addEventListener("click", function () {
  modals.style.display = "block";
});

allBooks.addEventListener("click", function () {
  displayBooks();
});

const deleteBook = (index) => {
  inputsArr.splice(index, 1); // Remove the book from the array
  displayBooks(); // Re-render the updated list
};

const displayBooks = () => {
  display.innerHTML = ""; // Clear the current display

  inputsArr.forEach((el, index) => {
    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-card");

    // Template for book details
    bookDetails.innerHTML = `
      <p class="array"><strong>Book ${index + 1}:</strong></p>
      <p class="array">Author: ${el.author}</p>
      <p class="array">Title: ${el.title}</p>
      <p class="array">Pages: ${el.pages}</p>
      <button class="deleteBtn">Delete</button>
      <hr>
    `;

    display.appendChild(bookDetails);

    // Add event listener to delete button
    const deleteBtn = bookDetails.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
      deleteBook(index);
    });
  });
};
