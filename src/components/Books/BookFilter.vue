<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Name"
            v-model="name"
            placeholder="Insert Name to search"
            @input="searchBook"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Author"
            v-model="author"
            placeholder="Insert Author to search"
            @input="searchBook"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
        <v-select
          :items="languages"
          label="Language"
          v-model="language"
          @input="searchBook"
        ></v-select>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="d-flex" cols="6" sm="2">
          <v-select
            :items="sort_fields"
            label="Sort By"
            @input="searchBook"
            v-model="sortBy"
            solo
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="6" sm="2">
          <v-select
            :items="sort_orders"
            label="Sort Order"
            @input="searchBook"
            v-model="sortOrder"
            solo
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      // We pick up default values from store.
      return {
        years: this.$store.state.filters.years,
        author: this.$store.state.filters.author,
        name: this.$store.state.filters.name,
        sortBy: this.$store.state.filters.sortBy,
        sortOrder: this.$store.state.filters.sortOrder,
        language: this.$store.state.filters.language,
        sort_fields: [
          'name',
          'author',
          'isbn',
          'year',
          'star'
        ],
        sort_orders: [
          'desc',
          'asc'
        ],
        languages: [
          'All',
          'English',
          'Spanish',
          'French'
        ]
      }
    },
    methods: {
      searchBook: function () {
        // For any change in form item we dispatch filterBooks from store.
        this.$store.dispatch('FilterBooks', {
          name: this.name,
          author: this.author,
          language: this.language,
          sortBy: this.sortBy,
          sortOrder: this.sortOrder,
          reset: true,
          reset_pager: true
        })
      }
    }
  }
</script>
