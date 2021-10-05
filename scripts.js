let myLibrary = [];
const container = document.querySelector('#container');

class Book{
  constructor (title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
  changeRead() {
    this.read = !this.read;
  }
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
    div.classList.add('book');
    div.id = myLibrary.indexOf(book);
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('h3');
    author.textContent = 'By: ' + book.author;
    const pages = document.createElement('p');
    pages.textContent = book.pages + ' pages long.'
    const read = document.createElement('button');
    if (book.read) {
      read.textContent = 'Read';
    } else {
      read.textContent = 'Unread';
    }
    read.addEventListener('click', () => {
      book.changeRead();
      displayLibrary();
    })
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Book'
    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(div.id, 1);
      displayLibrary();
    })
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
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