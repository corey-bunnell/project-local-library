function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find(book => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => 
  (book.borrows[0].returned == false));
  const checkedIn = books.filter((book) => 
  (book.borrows[0].returned == true));
  return [checkedOut, checkedIn];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((book) => {
  const account = accounts.find((account) => 
  account.id === book.id);
  return { ...book, ...account };
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
