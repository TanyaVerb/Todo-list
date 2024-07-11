console.log(1);

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// let animal = new Animal("Rex", 4, 4, "dog", "happy");
// console.log(animal.introduce());

// class Shark extends Animal {
//   constructor(name, age, status, legs = 0, species = "shark") {
//     super(name, age, legs, species);
//     this.status = status;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status, legs = 4, species = "cat") {
//     super(name, age, status, legs, species);
//   }
//   introduce() {
//     super.introduce();
//     return `${super.introduce()} Meow meow! `;
//   }
// }

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

// let shark = new Shark("Jaws", 5, "hungry");
// console.log(shark.introduce());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }

  lend() {
    if (this.available) {
      this.available = false;
      return `${this.title} by ${this.author} (ISBN:${this.isbn}- ${
        this.available ? "AVAILABLE" : "UNAVAILABLE"
      })`;
    } else {
      return `${this.title}is currently unavailable`;
    }
  }

  returnBook() {
    this.available = true;
    return `${this.title} has been returned`;
  }
  info() {
    return `${this.title} by ${this.author} (ISBN:${this.isbn}- ${
      this.available ? "AVAILABLE" : "UNAVAILABLE"
    })`;
  }
}

const book1 = new Book("1984", "G1", "1");
const book2 = new Book("HALLO World", "AH", "2");
console.log(book1);

class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getinfo() {
    return `User: ${this.name}, ID: ${this.id}`;
  }
}

class Member extends User {
  constructor(name, id) {
    super(name, id);
    this.borowedBooks = [];
  }
  borowBook(book) {
    if (book.available) {
      this.borowedBooks.push(book);
      book.lend();
      return `${this.name} borrowed ${book.title}`;
    } else {
      return ` ${book.title} is not in the library`;
    }
  }
  returnBook(book) {
    const index = this.borowedBooks.indexOf(book);
    if (index !== -1) {
      this.borowedBooks.splice(index, 1);
      book.returnBook();
      return ` ${this.name} returned ${book.title}`;
    } else {
      return ` ${this.name} dors not have ${book.title}`;
    }
  }
}

const user1 = new Member("Vlad", "1");
const user2 = new Member("Dima", "2");

// user1.borowBook(book1);
// user1.borowBook(book2);
// console.log(user1.borowBook(book1));
// console.log(user1.borowBook(book2));

// console.log(user1);
// console.log(user1.getinfo());

// console.log(user1.returnBook(book2));

// console.log(user1);
//_________________________________________________
class Librarian extends User {
  constructor(name, id, library) {
    super(name, id);
    this.library = library;
  }
  addBook(book) {
    this.library.books.push(book);
  }
  removeBook(book) {}
  lendBook(book, member) {}
  receiveBook(book) {}
}

class Librarary {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.members = [];
  }

  registerMember(member) {}
  unregisterMember(member) {}
  findBookByTitle(title) {}
  findBookByISBN() {}
}
