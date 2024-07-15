console.log(1);

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;

    console.log(this.introduce());
  }

  introduce(param) {
    this.customHello(param);
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// let animal = new Animal("Rex", 4, 4, "dog", "happy");
// console.log(animal.introduce());

class Shark extends Animal {
  constructor(name, age, status, legs = 0, species = "shark") {
    super(name, age, legs, species);
    this.status = status;
    this.customHello();
  }
  customHello(param) {
    console.log("Уникальный метод из SHARK, созданный ");
    console.log(`From ${param}`);
  }
}

let shark = new Shark("Jaws", 5, "hungry");
console.log(shark.introduce("2024"));

class Cat extends Animal {
  constructor(name, age, status, legs = 4, species = "cat") {
    super(name, age, status, legs, species);
  }
  customHello() {} //заглушка
  introduce() {
    super.introduce();
    return `${super.introduce()} Meow meow! `;
  }
}

let cat = new Cat("Whiskers", 2, "curious");

// class Dog extends Animal {
//   constructor(name, age, status, master, legs = 4, species = "dog") {
//     super(name, age, status, master, legs, species);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello,${this.master} `;
//   }
// }

// let dog = new Dog("Rex", 4, "happy", "Alice");
// console.log(dog.introduce());
// console.log(dog.greetMaster());

// let cat = new Cat("Whiskers", 2, "curious");
// console.log(cat.introduce());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//     this.available = true;
//   }

//   lend() {
//     if (this.available) {
//       this.available = false;
//       return `${this.title} by ${this.author} (ISBN:${this.isbn}- ${
//         this.available ? "AVAILABLE" : "UNAVAILABLE"
//       })`;
//     } else {
//       return `${this.title}is currently unavailable`;
//     }
//   }

//   returnBook() {
//     this.available = true;
//     return `${this.title} has been returned`;
//   }
//   info() {
//     return `${this.title} by ${this.author} (ISBN:${this.isbn}- ${
//       this.available ? "AVAILABLE" : "UNAVAILABLE"
//     })`;
//   }
// }

// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }

//   getinfo() {
//     return `User: ${this.name}, ID: ${this.id}`;
//   }
// }

// class Member extends User {
//   constructor(name, id) {
//     super(name, id);
//     this.borowedBooks = [];
//   }
//   borowBook(book) {
//     if (book.available) {
//       this.borowedBooks.push(book);
//       book.lend();
//       return `${this.name} borrowed ${book.title}`;
//     } else {
//       return ` ${book.title} is not in the library`;
//     }
//   }
//   returnBook(book) {
//     const index = this.borowedBooks.indexOf(book);
//     if (index !== -1) {
//       this.borowedBooks.splice(index, 1);
//       book.returnBook();
//       return ` ${this.name} returned ${book.title}`;
//     } else {
//       return ` ${this.name} dors not have ${book.title}`;
//     }
//   }
// }

// //_________________________________________________
// class Librarian extends User {
//   constructor(name, id, library) {
//     super(name, id);
//     this.library = library;
//   }
//   addBook(book) {
//     this.library.books.push(book);
//     return `${book.title} has been to the library`;
//   }
//   removeBook(book) {
//     const index = this.library.books.indexOf(book);
//     if (index != -1) {
//       this.library.books.splice(index, 1);
//       return `${book.title}has been removed the library`;
//     } else {
//       return ` ${book.title} is not in the library`;
//     }
//   }
//   lendBook(book, member) {
//     if (this.library.books.includes(book) && book.available) {
//       member.borowBook(book);
//       return `${book.title} has been lent to ${member.name}`;
//     } else {
//       return `${book.title} is unavaliably or not in the labrary`;
//     }
//   }
//   receiveBook(book) {
//     book.returnBook();

//     return `${book.title} has been received back into the library`;
//   }
// }

// class Librarary {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//     this.members = [];
//   }

//   registerMember(member) {
//     this.members.push(member);
//     return `${member.name} has been registred as a member of ${this.name}`;
//   }
//   unregisterMember(member) {
//     const index = this.members.indexOf(member);
//     if (index != -1) {
//       this.members.splice(index, 1);
//       return `${member.name}has beenunregistreid from ${this.name}`;
//     } else {
//       return ` ${member.name} is not a member of library`;
//     }
//   }
//   findBookByTitle(title) {
//     return this.books.find((book) => book.title === title);
//   }
//   findBookByISBN(isbn) {
//     return this.books.find((book) => book.isbn === isbn);
//   }
// }

// ////ffff

// const library = new Librarary("Vitebsk library");
// console.log(library);

// const librarian = new Librarian("John", "lib001", library);
// console.log(librarian);
// const member = new Member("Alice", "mem01");
// console.log(member);

// const book1 = new Book("1984", "George Orwell", "12345");
// const book2 = new Book("Brave new World", "Aldous", "6789");
// console.log(book1);
// console.log(book2);

// console.log(librarian.addBook(book1));
// console.log(librarian.addBook(book2));

// console.log(library.registerMember(member));
// console.log(member.borowBook(book1));
// console.log(member.borowBook(book1));
// console.log(librarian.lendBook(book2, member));
// console.log(librarian.receiveBook(book2));
