<template>
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/reminder">Reminder</router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #42b983;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>