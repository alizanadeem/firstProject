function findAuthorById(authors, id) {
  let findAuthor = authors.find((authorObj)=>{
    return authorObj.id === id;
  }); 
    return findAuthor;
    }
 
function findBookById(books, id) {
 let findBooks = books.find((booksObj)=>{
    return booksObj.id === id;
  }); 
    return findBooks;
    }

function isBookReturned(book) {
  const borrows = book.borrows;
  return borrows.every((obj) => obj.returned === true)
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => isBookReturned(book) === true );
  let notReturnedBooks = books.filter((book) => isBookReturned(book) !== true );
  return [
    notReturnedBooks,
    returnedBooks
  ];
}

 function findAccount(accountid,accounts){
    return accounts.find((account)=> account.id === accountid)
  }
function getBorrowersForBook(book, accounts) {
 const borrowers = book.borrows;
  const borrowingAccounts = borrowers.map((borrow)=>{
    const account = findAccount(borrow.id, accounts);
    account['returned'] = borrow.returned
    return account;
  });
  
  if(borrowingAccounts.length > 10 ){
    return borrowingAccounts.slice(0,10)
  }else{
    return borrowingAccounts
  }
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
