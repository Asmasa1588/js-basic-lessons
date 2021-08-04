console.log("Hello World!!");

const person = { firstName: "Mary", lastName: "Jon", age: 30 };
const { firstName, age } = person;

//console.log(person);
console.log(person.firstName);
console.log(firstName);
console.log(age);

//  1 the first task is to extract the first name of the person object and look it to the screen.
//ex console.log
// 2  extract age from the person object ,& subtract this value 2021 and log it.

const library = {
  address: " New York",
  books: [" Great adventures", " Space travel", "cat stories"],
};
console.log(library.books[2]);

// look the address of the lib and ask for its last book.

const library2 = {
  address: "New York",
  books: [
    {
      title: "Great adventures",
      author: " John Smith",
    },
    {
      title: "Space travel",
      author: "Mary",
    },
  ],
};
console.log(library2.author);

// display address and the last book author.

const books = [
  {
    title: "Great adventures",
    author: "John Smith",
  },
  {
    title: "Space travel",
    author: "Mary",
  },
  {
    title: "tess",
    author: "michael",
  },
];
console.log(books.author);
for (const book of books) {
  console.log("List of the books", book);
}

// 1 append/add a new book to the books array.
// 2 prepend a new book to the book array
// 3 write a loop and print each book title. all 4 books title.
