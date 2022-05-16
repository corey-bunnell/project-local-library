function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => 
  (nameA.name.last > nameB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  const results = [];
  books.forEach((book) => {
    const borrow = book.borrows;
    if (borrow.some((borrow) => borrow.id == account.id)) {
      results.push(1);
    }
  });
  return results.reduce((total,amount) =>
  total + amount);
}


function getBooksPossessedByAccount(account, books, authors) {
  let results=[];
  books.forEach(book => {
  const borrows = book.borrows;
  if (borrows.find((borrow) => 
  borrow.id === account.id && borrow.returned === false)) {
  results.push(book);}});
  results.forEach(book=>{
  const author = authors.find((person) => person.id === book.authorId);
  book['author'] = author;});
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
