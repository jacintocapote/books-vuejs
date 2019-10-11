<template>
  <div v-if="book">
    <BookFull :book=book />
  </div>
</template>

<script>
import BookFull from '../components/Books/BookFull';

export default {
  name: 'Book',
  components: {
    BookFull,
  },
  computed: {
    book() {
      return this.$store.state.current
    }
  },
  watch: {
    // Get attribure from route and get book from store.
    // Inmediate attribute used for get attribute directly.
    '$route.params.path': {
      handler (path) {
        this.$store.dispatch('getBook', path)
      },
      immediate: true
    }
  }
};
</script>
