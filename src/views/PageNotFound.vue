<template>
  <v-app id="page-not-found">
    <v-app-bar
      app
      clipped-left
      color="blue"
      dense
      class="container-title"
    >
      <v-toolbar-title class="pa-2 container-title">
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-link :to="'/'">
        <v-img
          :src="require('../assets/404.png')"
        ></v-img>
      </router-link>
    </v-content>
  </v-app>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>

