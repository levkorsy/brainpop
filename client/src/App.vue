<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">V1</router-link>
      <router-link to="/v2">V2</router-link>
    </div>
    <router-view :key="$route.name"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a5aeb7;
}

#nav a.router-link-exact-active {
  color: #008080;
}

/*Global css classes for the main color*/
.main-color-green {
  color: #008080 !important;
}

.main-color-green-bg {
  background-color: #008080 !important;
}

.main-color-green-border {
  border-color: #008080 !important;
}
</style>
