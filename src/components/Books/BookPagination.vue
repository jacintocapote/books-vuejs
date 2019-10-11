<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="this.$store.state.numPagers"
      @input="updatePagination"
      :value="this.$store.state.pager"
      circle
    ></v-pagination>
  </div>
</template>

<script>
  export default {
      data () {
      return {
        page: this.$store.state.pager
      }
    },
    methods: {
      lengthPagination: function() {
        return this.$store.state.numPagers
      },
      updatePagination: function () {
        // Update store books.
        let variables = this.$store.state.filters
        variables.reset = true
        variables.reset_pager = false
        this.$store.dispatch('FilterBooks', variables)

        // Update store pager.
        this.$store.dispatch('updatePager', this.page)
      }
    }
  }
</script>
