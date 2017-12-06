<template>
  <div class="network">
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <router-link to="/"><b-icon icon="home" size="is-medium"></b-icon></router-link> Ressources réseau
          </h1>
          <h2 class="subtitle">
            Accés local et a distance
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <router-link tag="li" to="sharedfolders">
                <a>Doosier partagés</a>
              </router-link>
              <router-link tag="li" to="datacpnv">
                <a>data.cpnv.ch</a>
              </router-link>
              <router-link tag="li" to="smb">
                <a>Accés SMB</a>
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
  name: 'Network',
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
