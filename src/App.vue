<template>
  <div id="app">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Service Catalog
          </h1>
          <h2 class="subtitle">
            cpnv
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
