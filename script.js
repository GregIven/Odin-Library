const titleInput = document.getElementById("titleInput");
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

const bookProps = Object.getOwnPropertyNames(new Book());
console.log(bookProps)

function addBookToLibrary() {
    let titleOf = titleInput.value;
    let authorOf = authorInput.value;
    let pagesOf = pagesInput.value;

    let bookEntry = new Book(authorOf, titleOf, pagesOf);

    myLibrary.push(bookEntry);
    updateGrid(bookEntry)
    console.log(myLibrary)
}

function updateGrid(latestBook) {
    let bookGrid = document.getElementById('booksGrid');
    let gridItem = document.createElement('div');
    gridItem.classList.add('book-card');


    for (let i = 0; i < bookProps.length; i++) {
        let pTag = document.createElement('p1');
        pTag.innerHTML =`<strong>${bookProps[i]}:</strong> ${latestBook[bookProps[i]]}\n`;
        gridItem.append(pTag);
    }

    bookGrid.append(gridItem);
}