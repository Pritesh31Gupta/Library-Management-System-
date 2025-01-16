document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
    const addBookForm = document.getElementById("add-book-form");
  
    const books = [
      { id: 1, title: "Head First Java", author: "Kathy Sierra", status: "Available" },
      { id: 2, title: " C Programming", author: "Brian Kernighan and Dennis Ritchie", status: "Issued" },
      { id: 3, title: "Physics", author: "HCverma", status: "Available" },
    ];
  
    function renderBooks() {
      bookList.innerHTML = "";
      books.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.id}</td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.status}</td>
        `;
        bookList.appendChild(row);
      });
    }
  
    addBookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("book-title").value;
      const author = document.getElementById("book-author").value;
  
      books.push({
        id: books.length + 1,
        title,
        author,
        status: "Available",
      });
  
      renderBooks();
      addBookForm.reset();
    });
  
    renderBooks();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const availableBooksTable = document.getElementById("available-books");
    const issuedBooksTable = document.getElementById("issued-books");
  
    // Sample Data
    const books = [
      { id: 1, title: "Java Advance", author: "Manisha Sharma", status: "Available" },
      { id: 2, title: "Basic Of C Programming", author: "Jogamohan", status: "Available" },
      { id: 3, title: "C++ Programming", author: "Xavier Martin", status: "Issued", issuedTo: "Pritesh" },
    ];
  
    // Render Available Books
    function renderAvailableBooks() {
      availableBooksTable.innerHTML = "";
      books.forEach((book) => {
        if (book.status === "Available") {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
            <td><button onclick="issueBook(${book.id})">Issue</button></td>
          `;
          availableBooksTable.appendChild(row);
        }
      });
    }
  
    // Render Issued Books
    function renderIssuedBooks() {
      issuedBooksTable.innerHTML = "";
      books.forEach((book) => {
        if (book.status === "Issued") {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.issuedTo}</td>
            <td><button onclick="returnBook(${book.id})">Return</button></td>
          `;
          issuedBooksTable.appendChild(row);
        }
      });
    }
  
    // Issue a Book
    window.issueBook = (id) => {
      const user = prompt("Enter the name of the user:");
      if (!user) return;
  
      const book = books.find((b) => b.id === id);
      if (book && book.status === "Available") {
        book.status = "Issued";
        book.issuedTo = user;
        renderAvailableBooks();
        renderIssuedBooks();
      }
    };
  
    // Return a Book
    window.returnBook = (id) => {
      const book = books.find((b) => b.id === id);
      if (book && book.status === "Issued") {
        book.status = "Available";
        delete book.issuedTo;
        renderAvailableBooks();
        renderIssuedBooks();
      }
    };
  
    // Initial Rendering
    renderAvailableBooks();
    renderIssuedBooks();
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const addUserForm = document.getElementById("add-user-form");
  
    // Sample Data
    const users = [
      { id: 1, name: "Pritesh Kumar", email: "Pritesh31kumar@gmail.com" },
      { id: 2, name: "Ram Kumar", email: "ramsita@gmail.com.com" },
    ];
  
    // Render Users
    function renderUsers() {
      userList.innerHTML = "";
      users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        `;
        userList.appendChild(row);
      });
    }
  
    // Add User
    addUserForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.getElementById("user-name").value;
      const userEmail = document.getElementById("user-email").value;
  
      const newUser = {
        id: users.length + 1,
        name: userName,
        email: userEmail,
      };
  
      users.push(newUser);
      renderUsers();
      addUserForm.reset();
    });
  
    // Delete User
    window.deleteUser = (id) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        renderUsers();
      }
    };
  
    // Initial Render
    renderUsers();
  });
  
