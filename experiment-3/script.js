// NAVIGATION
function showSection(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  // ===================== 3.1 PRODUCT CARDS =====================
  
  const products = [
    {name:"Wireless Headphones", price:129.99, stock:true},
    {name:"Mechanical Keyboard", price:89.99, stock:false},
    {name:"Smart Watch", price:199.99, stock:true},
    {name:"Bluetooth Speaker", price:79.99, stock:true},
    {name:"Gaming Mouse", price:49.99, stock:false},
    {name:"Laptop Stand", price:39.99, stock:true}
  ];
  
  const container = document.getElementById("productContainer");
  
  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <div class="img-box"></div>
  
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
  
        <span class="status ${p.stock ? 'in':'out'}">
          ${p.stock ? '✔ In Stock':'✖ Out of Stock'}
        </span>
      </div>
    `;
  });
  
  // ===================== 3.2 LIBRARY =====================
  
  let books = [
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald"},
    {title:"To Kill a Mockingbird", author:"Harper Lee"},
    {title:"1984", author:"George Orwell"},
    {title:"Pride and Prejudice", author:"Jane Austen"},
    {title:"The Hobbit", author:"J.R.R. Tolkien"}
  ];
  
  function displayBooks(list = books) {
    const div = document.getElementById("bookList");
    div.innerHTML = "";
  
    list.forEach((b, i) => {
      div.innerHTML += `
        <div class="book">
          <div>
            <h3>${b.title}</h3>
            <p>by ${b.author}</p>
          </div>
          <button class="remove" onclick="removeBook(${i})">Remove</button>
        </div>
      `;
    });
  }
  
  function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
  
    if(title && author){
      books.push({title, author});
      displayBooks();
  
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
    }
  }
  
  function removeBook(i){
    books.splice(i,1);
    displayBooks();
  }
  
  function searchBooks(){
    let s = document.getElementById("search").value.toLowerCase();
    let filtered = books.filter(b =>
      b.title.toLowerCase().includes(s) ||
      b.author.toLowerCase().includes(s)
    );
    displayBooks(filtered);
  }
  
  displayBooks();
  
  // ===================== 3.3 CLASS HIERARCHY =====================
  
  class Person {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    greet(){
      return `Hello, my name is ${this.name}.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, major){
      super(name, age);
      this.major = major;
    }
    greet(){
      return `${super.greet()} I study ${this.major}.`;
    }
  }
  
  class Teacher extends Person {
    constructor(name, age, subject){
      super(name, age);
      this.subject = subject;
    }
    greet(){
      return `${super.greet()} I teach ${this.subject}.`;
    }
  }
  
  // MORE DATA (IMPORTANT FOR MARKS)
  const persons = [
    new Person("Alex Johnson",30),
    new Student("Emma Watson",20,"Computer Science"),
    new Teacher("Dr. James Wilson",45,"Mathematics"),
    new Student("Rahul Sharma",22,"Engineering"),
    new Teacher("Mrs. Gupta",38,"Physics"),
    new Person("Sophia Lee",28)
  ];
  
  const pDiv = document.getElementById("personContainer");
  
  persons.forEach(p => {
    pDiv.innerHTML += `
      <div class="person">
        <h3>${p.name}</h3>
        <p><b>Age:</b> ${p.age}</p>
        <p>${p.greet()}</p>
        ${p.major ? `<p><b>Major:</b> ${p.major}</p>` : ""}
        ${p.subject ? `<p><b>Subject:</b> ${p.subject}</p>` : ""}
      </div>
    `;
  });
