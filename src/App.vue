<template>
  <div id="app">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <router-link to="/"><h1 class="title">
            <b-icon icon="home" size="is-medium"></b-icon> Catalogue de services
          </h1></router-link>
          <h2 class="subtitle">
            Centre Profesionnel du Nord Vaudois
          </h2>
        </div>
      </div>
    </section>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Service Catalog</strong> by <a href="https://github.com/bastiennicoud">Bastien Nicoud</a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

html {
  height: 100%;
}

body {
  height: 100%;
}

</style>
