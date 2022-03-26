<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Pedido</router-link> |
      <router-link to="/pastelero">Pastelero View</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #577590;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #577590;
}

nav a.router-link-exact-active {
  color: #C96480;
}
</style>
