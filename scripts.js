let myLibrary = [];
const container = document.querySelector('#container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  myLibrary.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('book')
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('h3');
    author.textContent = 'By: ' + book.author;
    const pages = document.createElement('p');
    pages.textContent = book.pages + ' pages long.'
    const read = document.createElement('p');
    if (book.read) {
      read.textContent = 'Book finished.'
    } else {
      read.textContent = 'Book not finished yet.'
    }
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    container.appendChild(div);
  })
}