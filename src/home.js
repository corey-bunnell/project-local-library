const { partitionBooksByBorrowedStatus } = require("./books");

function findLength(argument) {
  return argument.length;
}

function getTotalBooksCount(books) {
  return findLength(books);
}

function getTotalAccountsCount(accounts) {
  return findLength(accounts);
}

function getBooksBorrowedCount(books) { 
  let total = 0;
  const borrow = books.map((book) => book.borrows[0].returned);
  for (let key in borrow) {
    if (borrow[key] === false) {
      total++;
    }
  }
  return total;
}

function getMostCommonGenres(books) {
  const results = [];
  const rejects = [];
  books.forEach((book) => {
   const genre = {
    name: book.genre,
    count: 0
   }; 
   books.forEach((book) => {
    if (book.genre === genre.name) {
     genre.count++;
    }
  });
  (results.some((result) => result.name == genre.name)) ? 
  rejects.push(genre): results.push(genre);
 });
 return results.sort((genreA, genreB) =>
 genreA.count < genreB.count ? 1 : -1).slice(0,5);
}

function getMostPopularBooks(books) {
  const borrow = books.map((book) => 
  ({name: book.title, count: book.borrows.length}));
  return borrow.sort((bookA, bookB) => 
  bookA.count < bookB.count ? 1 : -1).slice(0, 5);
}

function getMostPopularAuthors(books, authors) { 
  let result = [];
 authors.forEach((author) => {
  let auth = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    auth.count += book.borrows.length;
   }
  });
  result.push(auth);
 });
 return result.sort((bookA, bookB) => 
 bookA.count < bookB.count ? 1 : -1).slice(0, 5);
}





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
