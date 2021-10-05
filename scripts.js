const container = document.querySelector('#container');

class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
  changeRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }

  displayLibrary() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
      container.removeChild(book);
    })
    this.books.forEach(book => {
      const div = document.createElement('div');
      div.classList.add('book');
      div.id = this.books.indexOf(book);
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
        this.displayLibrary();
      })
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete Book'
      deleteBtn.addEventListener('click', () => {
        this.books.splice(div.id, 1);
        this.displayLibrary();
      })
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(pages);
      div.appendChild(read);
      div.appendChild(deleteBtn);
      container.appendChild(div);
    })
  }
}

let myLibrary = new Library();

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
  myLibrary.addBook(newBook);
  myLibrary.displayLibrary();
  form.reset();
})