let myLibrary = [];
const container = document.querySelector('#container');

function Book(title, author, pages, read) {
  this.title = form.title.value;
  this.author = form.author.value;
  this.pages = form.pages.value;
  this.read = form.read.checked;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  const books = document.querySelectorAll('.book');
  books.forEach(book => {
    container.removeChild(book);
  })
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
      read.textContent = 'Book read.'
    } else {
      read.textContent = 'Book unread.'
    }
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    container.appendChild(div);
  })
}

const newBook = document.querySelector('#new');
const modal = document.querySelector("#formModal");
const close = document.querySelector('#close');

newBook.addEventListener('click', () => {
  modal.style.display = 'block';
})

close.addEventListener('click', () => {
  modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
})

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.style.display = 'none';

  let newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayLibrary();
  form.reset();
})