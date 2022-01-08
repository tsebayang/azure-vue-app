<template>
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/reminder">Reminder</router-link>
    <span class="right">
      User: <span v-if="userDetails">{{ userDetails }} </span
      ><span v-else>Unauthorized User</span> |
      <a href="/.auth/logout">Sign Out</a></span
    >
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    userDetails: String,
  },
};
</script>

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

  .right {
    float: right;
  }
  .right a {
    color: #a4dd7e !important;
  }
}
</style>
