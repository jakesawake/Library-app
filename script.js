"use strict";

const nameOfBook = document.querySelector(".book-name-field");
const nameOfAuthor = document.querySelector(".book-author-field");
const nameOfGenre = document.querySelector(".book-genre-field");
const bookID = document.querySelector(".book-ID-field");
const bookInputField = document.querySelector("#name");
const authorInputField = document.querySelector("#author");
const genreInputField = document.querySelector("#genre");
const submitBook = document.querySelector("#submit");
const bookForm = document.querySelector(".book-form");

// storing books in array
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

// function to accept book name, author, and genre from from form element
bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page reload on form submission
  let name = document.querySelector("#name").value; // accessing the value of the name input element in the form
  let author = document.querySelector("#author").value; // accessing the value of the author input element in the form
  let genre = document.querySelector("#genre").value; // accessing the value of the genre input element in the form

  let newBook = new Book(name, author, genre); // passing the input element values through the Book constructor to create a book object
  library.push(newBook); // pushing newBook to the library array BUG: make this function push multiple book to the array. Not just one.
});

console.log(library);
