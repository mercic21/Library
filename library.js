const modals = document.querySelector(".modals");

function BOOK(title,author,pages){
    this.title = title;
    this.author = author;
    this.title = title;
}
 
function Library(){
    this.books = []
    this.addToBooks = function(){
        const author = document.getElementById("input1").value;
        const title = document.getElementById("input2").value;
        const pages = document.getElementById("input3").value;
        const addBook = document.getElementById("addBook");
        const book = new Book(author,title,pages);
      
        addBook.addEventListener("click", function(){
          this.books.push(book);
          console.log(this.books);
        })
      }
}

newBook.addEventListener("click",function(){
    modals.style.display = "block";
    
  
  })

// Library.prototype.addToBooks = function(){
//   const author = document.getElementById("input1").value;
//   const title = document.getElementById("input2").value;
//   const pages = document.getElementById("input3").value;
//   const addBook = document.getElementById("addBook");
//   const book = new Book(author,title,pages);

//   addBook.addEventListener("click", function(){
//     this.books.push(book);
//     console.log(this.books);
//   })
// }
const library = new Library();
library.addToBooks();