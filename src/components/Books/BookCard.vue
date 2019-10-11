<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="require('../../assets/books/' + book.picture)"
      height="200px"
    ></v-img>

    <v-card-title class="book-title align-center blue lighten-4" >
      <h4>
        <router-link :to="{ name: 'book-full', params: { path: book.path }}">
          {{ book.name }}
        </router-link>
      </h4>
    </v-card-title>
    <v-chip
      class="ma-2 author"
      color="green lighten-2"
      text-color="white"
      label
    >
      <v-icon left>mdi-account-circle-outline</v-icon>
      <span>{{ book.author }}</span><br>
    </v-chip>
    <v-card-text>
      <span class="grey--text text-primary">{{ book.intro }}</span>
    </v-card-text>

    <v-card-actions class="book-actions">
      <v-rating
        v-model="book.star"
        readonly=readonly
        background-color="blue lighten-3"
        color="blue"
        small
      ></v-rating>
      <v-btn :to="{ name: 'book-full', params: { path: book.path }}" color="blue lighten-1" class="white--text">See More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .book-actions {
    display: flex;
    flex-direction: column;
  }
  h4 a {
    text-decoration: none;
    color: black;
  }
  .book-title {
    flex-direction: column;
    text-align: center;
  }
  .book-title a:hover {
    color: white;
  }
</style>

<script>
  export default {
    props: ['book'],
  }
</script>
