"use strict";

const container = document.querySelector(".container");
const nameOfBook = document.querySelector(".book-name-field");
const nameOfAuthor = document.querySelector(".book-author-field");
const nameOfGenre = document.querySelector(".book-genre-field");
const bookID = document.querySelector(".book-ID-field");
const bookInputField = document.querySelector("#name");
const authorInputField = document.querySelector("#author");
const genreInputField = document.querySelector("#genre");
const submitBook = document.querySelector("#submit");
const bookContainer = document.querySelector(".books-container");
const bookForm = document.querySelector(".book-form");
const submitBtn = document.querySelector(".form-button");

// storing books in array
let library = [];

// initally hiding the book form at the bottom
bookForm.style.display = "none";

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

// Creating prototype property for read status
const read = Object.create(Book);
read.read = "false";

// for hiding submit button and showing the book form
submitBtn.addEventListener("click", () => {
  submitBtn.style.display = "none";
  bookForm.style.display = "block";
});

// creating a card for each book
const renderCard = function (book) {
  const card = document.createElement("div");
  card.classList.add("card");
  bookContainer.appendChild(card);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-button");
  removeBtn.textContent = "Remove";
  removeBtn.type = "reset";

  const readBtn = document.createElement("button");
  readBtn.classList.add("read-button");
  readBtn.textContent = "Read";
  readBtn.type = "button";

  for (const prop in book) {
    if (prop !== "read") {
      const label = document.createElement("label");
      label.classList.add("label", "text-in-card");
      label.textContent = prop.charAt(0).toUpperCase() + prop.slice(1) + ": ";
      const input = document.createElement("input");
      input.classList.add("input", "text-in-card");
      input.type = "text";
      input.name = prop;
      input.value = book[prop];
      input.readOnly = true;
      card.appendChild(label);
      card.appendChild(input);
      card.appendChild(removeBtn);
      card.appendChild(readBtn);
    }
    readBtn.addEventListener("click", (e) => {
      e.target.classList.contains("read-button")
        ? (read.read = "true")
        : read.read === "false";
    });
  }

  // adding event listener on remove button to remove the closest card DOM element
  removeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
      const removeCard = e.target.closest(".card");
      if (removeCard) {
        removeCard.remove();
      }
    }
  });
};

// function to accept book name, author, and genre from form element
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let author = document.querySelector("#author").value;
  let genre = document.querySelector("#genre").value;

  let newBook = new Book(name, author, genre);
  library.push(newBook);
  bookForm.reset();
  bookForm.style.display = "none";
  submitBtn.style.display = "block";
  renderCard(newBook);
});
