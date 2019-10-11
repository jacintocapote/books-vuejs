<template>
  <v-app id="book-list">
    <v-app-bar
      app
      clipped-left
      color="blue"
      dense
    >
      <v-toolbar-title class="pa-2 container-title">
        <span class="title">Books View List Example</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="pa-2 fluid">
        <BookFilter/>
        <v-row>
          <v-col :cols="12" :sm="3" v-for="book in books" :key="book.id">
            <BookCard :book = book />
          </v-col>
        </v-row>
        <BookPagination/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
  .container-title {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .title {
    color: white;
    text-align: center;
  }
</style>

<script>
import BookCard from "./BookCard.vue"
import BookFilter from "./BookFilter.vue"
import BookPagination from "./BookPagination.vue"

export default {
  components: {
    BookCard,
    BookFilter,
    BookPagination
  },
  props: ['books']
};
</script>


