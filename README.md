# Vue.js Book Example

This is a example VUEJS implementing with list books and view book list

## Libraries

The libraries we used are:
 - **vue-cli**: For a fast develop with vue.js https://cli.vuejs.org/
 - **vuetify**: Is a requeriment from the test.
 - **vuex**: Is a requeriment from the test and allow create an store for save states.
 - **vue router**: Is a requeriment from the test and used over any basic vue.js app for allow map routers.
 - **apollo server**: Is a simple node server connected with lowdb and server a graphql server. We use this solution instead a external API because we have full control over this server, we can create new schemas for graphql,..... Is a fantastic tool for testing before connect to a final API.
 - **lodash**: Connected with lowd and apollo-server allow do complex queries over lowdb and show with graphql.
 - **lowdb**: Simple database running over node.
 - **vuex-persistedstate**: Allow save states store and use after refresh browser.
 - **mocha+tai**: For this simple project is better to use mocha. Is basic framework and for little App is the best solution. If we want to create a bigger App then should be use Jest if we want more complex tests, ...
 - **null-loader**: We use this library to allow execute tests without sass error generate from vuetify v2. From https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/101
 - **fibers + sass**: We have ready the system to use sass. We don't use any complex sass file because is a little App and some styles were applied with scoped styles.


Inside the App folder we have:
- **apollo-server**: folder (This is a apollo server with lowdb). We have 12 books by default for show data after run our App.
- **src/components/Books**: All components related with books.
  - **BookCard.vue**: Component we will use for a book teaser mode.
  - **BookFull.vue**: Component use for a book full mode. Path book/:id
  - **BookFilter.vue**: Component with form header used in list books. We can filter or sort by multiple field.
  - **BooksList.vue**: This component uses BookCard, BookFilter, BookPagination to generate a grid list with top filter.
  - **BookPagination.vue**: Component using vuetify pager and communicate with store.
- **src/plugins**: We have only vuetify configuration to allow use icons from Material Design
- **src/views**: We have three basic views used for homepage, book full page, and page not found.
  - **HomePage.vue**: Render a BookList component.
  - **Book.vue**: Render a bookFull component based in the id argument.
  - **PageNotFound.vue**: Simple page not found with a picture and link to back to homepage.
- **store.js**: All logic for vuex integration.
- **router.js**: All logic related with router. We manage page not found and create two router for homepage and book/:id


## Project setup

We are using docker and docker-composer (V3) for have a full dev environment. The docker compose launch an node instance with two server (8080 for vuejs app, 4000 for apollo server).

**NOTE**: Very important to have installed Docker (https://docs.docker.com/install/) and docker-compose (https://docs.docker.com/compose/).

After clone the repo we go inside folder and execute:

```
docker-compose up -d --build
```
After this we will have running over http://localhost:8080 our vue.js APP (with hot reload) and over http://localhost:4000 our apollo server (Running in dev mode with hot reload).


### Run unit tests

If we want to run tests we can do with:
```
npm run test:unit
```

**NOTE**: At the moment we have only two simple test to verify content from bookCard and bookFull.
