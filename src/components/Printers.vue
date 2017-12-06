<template>
  <div class="printers">
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Services d'impression
          </h1>
          <h2 class="subtitle">
            Ajout et configuration
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <router-link tag="li" to="drivers">
                <a>Installation des drivers</a>
              </router-link>
              <router-link tag="li" to="add">
                <a>Ajouter une imprimante</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>

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
