"use strict";
var lo = require("lodash");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
var x = "From Here and Forward, and more.";
var y = lo.snakeCase(x);
var z = lo.camelCase(y);
console.log('snake cased: ' + y);
console.log('camel cased: ' + z);
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total books count after enum: ' + numberOfBooks);
    console.log('First available now how: ' + firstAvailable);
}
function getTitleByCategory(catFilter) {
    console.log('Filtering by category: ' + Category[catFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var book = allBooks_1[_i];
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["Poetry"] = 2] = "Poetry";
})(Category || (Category = {}));
;
var BigCategory;
(function (BigCategory) {
    BigCategory[BigCategory["Biography"] = 1] = "Biography";
    BigCategory[BigCategory["Fiction"] = 2] = "Fiction";
    BigCategory[BigCategory["Poetry"] = 9] = "Poetry";
})(BigCategory || (BigCategory = {}));
; // 1, 2, 9
var Category3;
(function (Category3) {
    Category3[Category3["Biography"] = 1] = "Biography";
    Category3[Category3["Fiction"] = 2] = "Fiction";
    Category3[Category3["Poetry"] = 3] = "Poetry";
})(Category3 || (Category3 = {}));
; // 1,2,3
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
function LogBookTitles(titles) {
    titles.forEach(function (title) {
        console.log('Book Title Listing: ' + title + '.');
    });
}
function logCategory(cat) {
    console.log('-- Index of fiction: ' + cat);
}
logCategory(BigCategory.Fiction);
//*********************************************************
LogBookTitles(getTitleByCategory(Category.Poetry));
var fictionalBooks = getTitleByCategory(Category.Fiction);
fictionalBooks.forEach(
// val: current element, idx: index of the current element, arr current array
function (val, idx, arr) {
    console.log('>>>-- For each print: idx - ' + idx + ', value - ' + val);
});
// ways to declare arrays
var strArray1 = ['hear', 'now', 'then'];
var strArray2 = ['hear', 'now', 'then'];
var anyArray = ['hear', 'now', 'then'];
// tuples
var myTuple = [25, 'truck'];
// additional elements can be any type from those previously specified. 
//# sourceMappingURL=app.js.map