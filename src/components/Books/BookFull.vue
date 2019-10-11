<template>
  <v-app id="book-full">
    <v-app-bar
      app
      clipped-left
      color="blue"
      dense
    >
      <router-link to="/" class="back">
        <v-chip
          class="ma-2"
          color="white"
          text-color="white"
          label
        >
          <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
        </v-chip>
      </router-link>
      <v-toolbar-title class="pa-2 container-title">
        <span class="title-book align-center">{{ book.name }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container v-if="book" class="grey lighten-5">
        <v-row class="mb-6">
          <v-col class="col-4">
            <v-card>
              <v-img
                :src="require('../../assets/books/' + book.picture)"
              ></v-img>
            </v-card>
          </v-col>
          <v-col class="col-8">
            <v-card>
            <v-card-text>
                <h1>{{ book.name }}</h1>
                <v-rating
                  v-model="book.star"
                  readonly=readonly
                  background-color="blue lighten-3"
                  color="blue"
                  small
                ></v-rating>
                <v-chip
                  class="ma-2"
                  color="green lighten-2"
                  text-color="white"
                  label
                >
                  <v-icon left>mdi-account-circle-outline</v-icon>
                  {{ book.author }}
                </v-chip>
                <v-chip
                  class="ma-2 isbn"
                  color="blue lighten-2"
                  text-color="white"
                  label
                >
                  {{ book.isbn }}
                </v-chip>
                <v-chip
                  class="ma-2 language"
                  color="blue lighten-2"
                  text-color="white"
                  label
                >
                  {{ book.language }}
                </v-chip>
                <v-chip
                  class="ma-2 year"
                  color="blue lighten-2"
                  text-color="white"
                  label
                >
                  {{ book.year }}
                </v-chip>
                <p>{{ book.intro }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col class="col-12">
            <v-card>
              <v-card-text>
                <h2>Description</h2>
                {{ book.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
      <v-container v-else>
        <h1>Book not found.</h1>
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
  .title-book {
    color: white;
    text-align: center;
  }
  .back {
    text-decoration: none;
  }
</style>

<script>
  export default {
    props: ['book'],
    data: () => ({
      readonly: true,
    })
  }
</script>
