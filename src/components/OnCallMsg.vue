<template>
  <div class="message-box">
    <div class="basic-grid">
      <div class="profile-pic">
        <img src="../assets/oncall_julio.jpg" alt="" />
      </div>
      <div class="profileContent">
        <span class="user-color">Julio Nunez</span>
        <p>Teams only, don't call about Opera</p>
      </div>
    </div>
    <div class="basic-grid"></div>
  </div>
</template>

<script>
export default {
  name: "OnCallMsg",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 64px auto;
}

.user-color {
  color: rgb(52, 152, 219);
  font-weight: bold;
}

.message-box {
  text-align: left;
  background: #303949;
  color: #c5d1e4;
  margin: 0.8rem 1rem;
  padding: 1.125rem;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.8);
}
.profile-info {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
.profile-pic {
  height: 64px;
}
.profile-pic img {
  width: 100%;
  border-radius: 1px;

}
.smoll {
  font-size: 1rem;
  color: #a6b0da;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
