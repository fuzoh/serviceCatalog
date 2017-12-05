<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article v-on:click="click" class="tile is-child notification is-info">
              <h1 class="title">Mails</h1>
              <h2 class="subtitle">Hehe</h2>
            </article>
            <article class="tile is-child box">
              <h1 class="title">Ressources réseau</h1>
              <h2 class="subtitle">Hehe</h2>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h1 class="title">Impression</h1>
              <h2 class="subtitle">Hehe</h2>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h1 class="title">Services WEB</h1>
            <h2 class="subtitle">Intranet, support</h2>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Authentification</h1>
          <h2 class="subtitle">Identifients, mot de passe</h2>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    click () {
      alert('tutu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 40px auto;
}

article:hover {
  cursor: pointer;
}
</style>
