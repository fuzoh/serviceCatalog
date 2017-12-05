<template>
  <div id="app">

    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <div class="container">
        <router-link to="/" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </router-link>
      </div>

    </nav>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <router-link to="/"><h1 class="title">
            Catalogue de services
          </h1></router-link>
          <h2 class="subtitle">
            Centre Profesionnel du Nord Vaudois
          </h2>
        </div>
      </div>
    </section>

    <router-view/>

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
