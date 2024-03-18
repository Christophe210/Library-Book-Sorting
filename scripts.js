class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

function selectionSortBooks(books, key='title', ascending=true) {
    const n = books.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (ascending ? books[j][key] < books[minIndex][key] : books[j][key] > books[minIndex][key]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [books[i], books[minIndex]] = [books[minIndex], books[i]];
        }
    }
    return books;
}

const books = []; // Array to hold book records

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const genre = document.getElementById('genre').value.trim();

    if (title && author && genre) {
        const newBook = new Book(title, author, genre);
        books.push(newBook);
        selectionSortBooks(books, 'title', true);
        displayBooks(books);
        // Clear input fields after adding book
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('genre').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to display sorted books
function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear existing content
    books.forEach(book => {
        const bookInfo = document.createElement('div');
        bookInfo.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <hr>
        `;
        bookList.appendChild(bookInfo);
    });
}

// Get the "Add Book" button by id
const addBookBtn = document.getElementById('add-book-btn');

// Add event listener to the "Add Book" button
addBookBtn.addEventListener('click', addBook);
