import GraphQLJSON from 'graphql-type-json'
import _ from 'lodash'


export default {
  JSON: GraphQLJSON,

  Query: {
    booksCount: (root, args, { db }) => db.get('books').size(),
    getBook: (root, { path }, { db }) => {
      return db.get('books').find({ path: path }).value()
    },
    searchBookTitle: (root, { name }, { db }) => {
      return db.get('books').sortBy('name').filter({ name: name }).value()
    },
    searchBooks: (root, { name, author, language, sortBy, offset}, { db }) => {
      // Check two special case. 1 with language empty and another without language empty.
      return db.get('books').filter(
        function(book) {
          if (language && language != 'All') {
            return _.startsWith(book.name, name) && _.startsWith(book.author, author) && book.language == language
          }
          else {
            return _.startsWith(book.name, name) && _.startsWith(book.author, author)
          }
        }
      ).sortBy(sortBy).slice(offset, offset + 8).value()
    },
    searchBooksCount: (root, { name, author, language}, { db }) => {
      // Check two special case. 1 with language empty and another without language empty.
      return db.get('books').filter(
        function(book) {
          if (language && language != 'All') {
            return _.startsWith(book.name, name) && _.startsWith(book.author, author) && book.language == language
          }
          else {
            return _.startsWith(book.name, name) && _.startsWith(book.author, author)
          }
        }
      ).size()
    },
  },
}
