import * as lo from "lodash";

function GetAllBooks() {
  let books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ]
  return books;
}

let x = "From Here and Forward, and more.";
let y = lo.snakeCase(x);
let z = lo.camelCase(y);
console.log('snake cased: ' + y);
console.log('camel cased: ' + z);


function LogFirstAvailable(books): void {
  let numberOfBooks: number = books.length;

  let firstAvailable: string = '';
  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Total books count after enum: ' + numberOfBooks);
  console.log('First available now how: ' + firstAvailable);
}

function getTitleByCategory(catFilter: Category): Array<string> {
  console.log('Filtering by category: ' + Category[catFilter]);
  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];

  for (let book of allBooks) {
    if (book.category === catFilter) {
      filteredTitles.unshift(book.title);
    }
  }
  // return allBooks.filter((book) => {
  //     return book.category === catFilter;
  // });

  return filteredTitles;
}

//function getBookById
// ts platform will assign 0 based index to each string value
enum Category { Biography, Fiction, Poetry };


enum BigCategory { Biography = 1, Fiction, Poetry = 9 }; // 1, 2, 9


enum Category3 { Biography = 1, Fiction, Poetry }; // 1,2,3


const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);

function LogBookTitles(titles: string[]) {
  titles.forEach((title) => {
    console.log('Book Title Listing: ' + title + '.');
  });

}

function logCategory(cat: BigCategory) {
  console.log('-- Index of fiction: ' + cat);
}

logCategory(BigCategory.Fiction);

//*********************************************************
LogBookTitles(getTitleByCategory(Category.Poetry));

const fictionalBooks = getTitleByCategory(Category.Fiction);

fictionalBooks.forEach(
  // val: current element, idx: index of the current element, arr current array
  (val, idx, arr)=>{
    console.log('>>>-- For each print: idx - ' + idx + ', value - ' + val);
  }
);

// ways to declare arrays

let strArray1: string[] = ['hear', 'now', 'then'];
let strArray2: Array<string> = ['hear', 'now', 'then'];
let anyArray: any[] = ['hear', 'now', 'then'];

// tuples

let myTuple: [number, string] = [25, 'truck'];
// additional elements can be any type from those previously specified.