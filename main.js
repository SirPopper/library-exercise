let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book.prototype.info = function () {
//   return `${this.title} by ${this.author}, ${this.pages}, ${
//     this.read ? "already read" : "not read yet"
//   }`;
// };

// add books in new form to object array
const btnSubmit = document.querySelector(".submit");
const input = document.querySelectorAll("input");

//add event listener to submit button
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault(); //need this one such that first card loads

  const inputArr = [];
  input.forEach((input) => inputArr.push(input));
  console.log(input);

  //create new book
  const newBook = new Book(
    inputArr[0].value,
    inputArr[1].value,
    inputArr[2].value,
    inputArr[3].checked
  );

  //add new book to library
  addBookToLibrary(newBook);

  //add Card
  addCard(
    inputArr[0].value,
    inputArr[1].value,
    inputArr[2].value,
    inputArr[3].checked
  );

  //empty input fields
  input.forEach((input) => {
    input.value = "";
    input.checked = false;
  });
});

//add book to library
function addBookToLibrary(book) {
  myLibrary.push(book);
  console.log(myLibrary);
}

const dune = new Book("Dune", "Frank Herbert", "200", false);
addBookToLibrary(dune);

//populate card with books in array
console.log(myLibrary);

document.createElement("div");

//dashboard element
const dashboard = document.querySelector(".dashboard");

//add card and fill card
function addCard(title, author, pages, read) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", "delete-outline.png"); //trash img
  img.classList.add("deleteimg");

  const cardBtn = document.createElement("div"); //card button
  cardBtn.classList.add("card-button");

  cardBtn.appendChild(img);
  cardEl.appendChild(cardBtn);

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "ctext");
  cardTitle.textContent = title;
  cardEl.append(cardTitle);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author", "ctext");
  cardAuthor.textContent = author;
  cardEl.append(cardAuthor);

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages", "ctext");
  cardPages.textContent = pages;
  cardEl.append(cardPages);

  const cardRead = document.createElement("div");
  cardRead.classList.add("card-read", "ctext");
  cardRead.textContent = read ? "already read" : "not read";
  cardEl.append(cardRead);

  dashboard.append(cardEl);

  //delete card
  const deleteBtn = document.querySelectorAll(".deleteimg");

  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("clicked");
      e.currentTarget.parentElement.parentElement.remove();
    });
  });
}
