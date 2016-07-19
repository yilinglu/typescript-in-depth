function GetAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
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
    console.log('Filtering by category: ' + catFilter);
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["Poetry"] = 2] = "Poetry";
})(Category || (Category = {}));
;
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
function LogBookTitles(titles) {
    titles.forEach(function () {
    });
}
//# sourceMappingURL=app.js.map