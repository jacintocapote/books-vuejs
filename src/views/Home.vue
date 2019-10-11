<template>
  <div v-if="books" class="content">
    <BooksList :books=books />
  </div>
  <div v-else>
    <h2> Loading </h2>
  </div>
</template>

<script>
import BooksList from '@/components/Books/BooksList';

export default {
  components: {
    BooksList,
  },
  computed: {
    books() {
      return this.$store.state.books
    }
  },
  watch: {
    // Fetch data with load.
    '$route': {
      handler: 'fetchBooks',
      immediate: true
    }
  },
  methods: {
    fetchBooks() {
      let variables = this.$store.state.filters
      variables.reset = true
      variables.reset_pager = true
      this.$store.dispatch('FilterBooks', variables)
    }
  }
};
</script>
