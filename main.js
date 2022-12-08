let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, ${
    this.read ? "already read" : "not read yet"
  }`;
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", true);
console.log(theHobbit.info());

function addBookToLibrary() {
  myLibrary.push(theHobbit);
}

addBookToLibrary();

console.log(myLibrary);
console.log(myLibrary[0].author);
