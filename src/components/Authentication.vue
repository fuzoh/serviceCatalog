<template>
  <div class="printers">
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Authentification
          </h1>
          <h2 class="subtitle">
            Gestion des identifiants, mot de passes
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <router-link tag="li" to="password">
                <a>Mot de passe</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="container my-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Printers',
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
