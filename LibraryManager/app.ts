function GetAllBooks(){
  let books = [
		{ title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
  ]
  return books;
}

function LogFirstAvailable(books): void {
  let numberOfBooks: number = books.length;

    let firstAvailable:string = '';
  for(let currentBook of books){
    if(currentBook.available){
      firstAvailable = currentBook.title;
      break;
    }
  }

  console.log('Total books count after enum: ' + numberOfBooks);
  console.log('First available now how: ' + firstAvailable);
}

function getTitleByCategory(catFilter: Category): Array<string> {
  console.log('Filtering by category: ' + catFilter);
  const allBooks = GetAllBooks();
  const filteredTitles :string[] = [];

  for(let book of allBooks){
    if(book.category === catFilter){
      filteredTitles.unshift(book.title);
    }
  }
  // return allBooks.filter((book) => {
  //     return book.category === catFilter;
  // });

  return filteredTitles;
}

enum Category {Biography, Fiction, Poetry};

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);

function LogBookTitles(titles: string[]){
  titles.forEach(()=>{

  });
}