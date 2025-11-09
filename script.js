"use strict";

const nameOfBook = document.querySelector(".book-name-field");
const nameOfAuthor = document.querySelector(".book-author-field");
const nameOfGenre = document.querySelector(".book-genre-field");
const bookID = document.querySelector(".book-ID-field");

let library = [];

// book constructor
const Book = function (name, author, genre) {
  if (!new.target) {
    throw Error(
      "The function was called without the 'new' keyword, please try to use the constructor again",
    );
  }
  ((this.name = name),
    (this.author = author),
    (this.genre = genre),
    (this.ID = crypto.randomUUID()));
};

// const book = new Book("binding 13", "Chloe Walsh", "Fiction");
// console.log(book);

// - function to prompt user for info about book
// - then pass that info through to the book constructor
// - finally push the book to the library array
const addBook = () => {
  let bookName = prompt("Enter name of book here:");
  let bookAuthor = prompt("Enter author name here:");
  let bookGenre = prompt("Enter Genre of book here:");

  let newBook = new Book(bookName, bookAuthor, bookGenre);
  library.push(newBook);
};

const displayBooks = function (arr) {
  arr.forEach((book) => {
    for (const prop of book) {
      if (prop === "name") {
        nameOfBook.textContent = book.name;
      } else if (prop === "author") {
        nameOfAuthor.textContent = book.author;
      } else if (prop === "genre") {
        nameOfGenre.textContent = book.genre;
      } else {
        bookID.textContent = book.ID;
      }
    }
  });
};

// nameOfBook.textContent = "test";
// nameOfAuthor.textContent = "test";
// nameOfGenre.textContent = "test";
// bookID.textContent = crypto.randomUUID();

addBook();

console.log(library);
