function findAccountById(accounts, id) {
  let findAccounts = accounts.find((accountsObj)=>{
    return accountsObj.id === id;
  }); 
    return findAccounts;
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort((accountA,accountB)=>{
    if(accountA.name.last < accountB.name.last){
      return -1
    }else{
      1
    }
  });
  return sortedAccounts
}


function getTotalNumberOfBorrows(account, books) {
 let totalCount = 0;
  books.forEach((book) => {
   const accountBorrowedRecord = (book.borrows).filter((borrow) => borrow.id === account.id)
   totalCount = totalCount + accountBorrowedRecord.length;
 })
  
  return totalCount;
}



function isBookCheckedOutByAccount(book, accountId) {
  return book.borrows.some((borrow) => borrow.id === accountId && borrow.returned === false)
}

function getAuthor(authorId, authors) {
  return authors.find((author) => author.id === authorId)
}
function getBooksPossessedByAccount(account, books, authors) {
  const booksPossessedByAccount = books.filter((book) => isBookCheckedOutByAccount(book, account.id))
  
  const booksPossessedByAccountWithAuthors = booksPossessedByAccount.map((book) => {
    book['author'] = getAuthor(book.authorId, authors)
    return book;
  });
  
  return booksPossessedByAccountWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
