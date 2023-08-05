function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function isBookCheckedOut(book) {
  return book.borrows[0].returned === false;
}
function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => isBookCheckedOut(book));
  return borrowedBooks.length;
}

function getCountOfBooksByGenre(genre, books) {
  const bookCount = books.reduce((count, book) => {
    if(book.genre === genre) {
      count++;
    }
    return count;
  }, 0);
  
  return bookCount;
}
function getMostCommonGenres(books) {
  const genres = [];
  books.forEach((book) => {
    if(!genres.includes(book.genre)) {
      genres.push(book.genre)
    }
  });
  
  const genresList = genres.map((genre) => {
    return {
      name: genre,
      count: getCountOfBooksByGenre(genre, books)
    }
  });
  
  const sortedGenresList = genresList.sort((g1, g2) => (g1.count < g2.count) ? 1 : (g1.count > g2.count) ? -1 : 0);
  if(sortedGenresList.length > 5) {
    return sortedGenresList.slice(0, 5);
  } else {
    return sortedGenresList;
  }
  
}

function getCountOfBooksBorrowed(book) {
  return book.borrows.length;
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((book)=> {
    return {
      name: book.title,
      count: getCountOfBooksBorrowed(book)
    }
  });
  const sortedPopularBooks = popularBooks.sort((b1, b2) => (b1.count < b2.count) ? 1 : (b1.count > b2.count) ? -1 : 0);
  if(sortedPopularBooks.length > 5) {
    return sortedPopularBooks.slice(0, 5);
  } else {
    return sortedPopularBooks;
  }
  
}
function getCountBooksAreBorrrewd(books) {
  return books.reduce((count, book) => count + book.borrows.length, 0)
}
function getMostPopularAuthors(books, authors) {
  const MostPopularAuthors = authors.map((author) => {
    const authorBooks = books.filter((book) => book.authorId === author.id);
    return {
      name: author.name.first + ' ' + author.name.last,
      count: getCountBooksAreBorrrewd(authorBooks)
    }
  });
  const sortedMostPopularAuthors = MostPopularAuthors.sort((a1, a2) => (a1.count < a2.count) ? 1 : (a1.count > a2.count) ? -1 : 0);
  if(sortedMostPopularAuthors.length > 5) {
    return sortedMostPopularAuthors.slice(0, 5);
  } else {
    return sortedMostPopularAuthors;
  }
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
