const titleInput = document.getElementById("authorInput");
const authorInput = document.getElementById("authorInput");
const pagesInput = document.getElementById("pagesInput")

const addBookBtn = document.getElementById('addBookBtn');
const submitBookBtn = document.getElementById("bookSubmitbtn");

addBookBtn.addEventListener('click', () => addBookToLibrary());

let myLibrary = [];



function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary() {
    let titleOf = titleInput.value;
    let authorOf = authorInput.value;
    let pagesOf = pagesInput.value;

    let bookEntry = new Book(authorOf, titleOf, pagesOf);

    myLibrary.push(bookEntry);
    console.log(myLibrary)
}