import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import gql from 'graphql-tag'
import { createProvider } from './vue-apollo'

Vue.use(Vuex)

export default new Vuex.Store({
  // We use persistedState to save values with reload browser.
  plugins: [
    persistedState()
  ],
  state: {
    books: {},
    booksCount: 0,
    pager: 1,
    numPagers: 1,
    current: {},
    filters: {name: "", author: "", language: "All", sortBy: "name", sortOrder: "asc"}
  },
  mutations: {
    SET_BOOKS (state, { books, reset, variables }) {

      if (reset) {
        state.books = []
        state.books = books
      }
      if (!reset && state.books.length == 0) {
        state.books = books
      }

      state.filters = variables
    },
    SET_BOOKS_COUNT (state, count) {
      state.booksCount = count
      state.numPagers = parseInt(Math.ceil(count / 8))
    },
    UPDATE_BOOK (state, { data }) {
      state.current = data
    },
    SET_PAGER (state, pager) {
      state.pager = pager
    }
  },
  actions: {
    async getBooksCount({ commit }) {
      // Track time to get information about performance.
      console.time('getBooksCount')
      const apollo = createProvider()
      const response = await apollo.defaultClient.query({
        query: gql`
          query {
            booksCount
          }
        `
      })

      const booksCount = response.data.booksCount
      commit('SET_BOOKS_COUNT', booksCount)

      console.timeEnd('getBooksCount')
    },
    async getBook({ commit }, path) {
      console.time(`getBook ${path}`)

      const query = gql`
        query getBook($path: String!) {
          getBook(path: $path) {
            id
            name
            isbn
            intro
            description
            author
            language
            picture
            star
            year
          }
        }`

      const variables = {
        path: path
      }

      // Do query over apollo and commit to store.
      const apollo = createProvider()
      const response = await apollo.defaultClient.query({query, variables})
      commit('UPDATE_BOOK', { data: response.data.getBook })

      console.timeEnd(`getBook ${path}`)
    },
    async FilterBooks({ commit }, {name, author, language, sortBy, sortOrder, reset, reset_pager}) {
      // Track time to get information about performance.
      console.time(`FilterBooks ${name} ${author} ${sortBy} ${sortOrder}`)

      // Query with graphql for do a search book.
      const query = gql`
        query searchBooks($name: String!, $author: String!, $language: String!, $sortBy: String!, $offset: Int!) {
          searchBooks(name: $name, author: $author, language: $language, sortBy: $sortBy, offset: $offset) {
            id
            name
            isbn
            intro
            description
            author
            language
            picture
            star
            year
            path
          }
        }`

      const queryCount = gql`
        query searchBooksCount($name: String!, $author: String!, $language: String!) {
          searchBooksCount(name: $name, author: $author, language: $language)
        }`

     // If we do a new filter query, check if we need reset pager.
      if (reset_pager) {
        commit('SET_PAGER', 1)
      }

      // This variable are filters and offset count.
      let variables = {
        name: name,
        author: author,
        language: language,
        sortBy: sortBy,
        offset: (this.state.pager - 1) * 8
      }

      // This variable are filters for count Query.
      const variablesCount = {
        name: name,
        author: author,
        language: language,
      }

      // Do query over apollo. The ASC/DESC is checked from here.
      const apollo = createProvider()
      const response = await apollo.defaultClient.query({query, variables})
      const books_desc = response.data.searchBooks
      const books_asc = books_desc.slice().reverse()
      let books = []

      // Check filter order ASC or DESC
     if (sortOrder == 'asc') {
        books = books_asc
      }
      else {
        books = books_desc
      }

      // Add sortOrder before save into states.
      variables.sortOrder = sortOrder

      // Set values to store.
      commit('SET_BOOKS', { books, reset, variables })

      // Set Count to states for use with pager.
      const responseCount = await apollo.defaultClient.query({query: queryCount, variables: variablesCount})
      commit('SET_BOOKS_COUNT', responseCount.data.searchBooksCount)

      console.timeEnd(`FilterBooks ${name} ${author} ${sortBy} ${sortOrder}`)
    },
    async updatePager({ commit }, pager) {
       // Track time to get information about performance.
      console.time(`Pager ${pager}`)
      commit('SET_PAGER', pager)
      console.timeEnd(`Pager ${pager}`)
    }
  }
})
