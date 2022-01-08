<template>
  <div class="center">
    <h1>CLV-IT-APP-001</h1>
    <h2>Login:</h2>
    <a href="/.auth/login/aad">
      <button>
        <img src="../assets/aad_logo.png" />
        Azure Active Directory
      </button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.center {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50vw;
  height: 50vh;
}
h1,
h2 {
  color: white;
}
h1 {
  font-size: 5rem;
}
button {
  display: block;
  border: none;
  color: white;
  background-color: dodgerblue;
  border-radius: 2px;
  font-size: large;
  font-weight: bold;
  padding: 1rem;
  margin-top: 2rem;

  img {
    width: 1.25rem;
    height: 20px;
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
}

@media screen and (max-width: 800px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    font-weight: normal;
    padding: 0.75rem;
  }
}
</style>
