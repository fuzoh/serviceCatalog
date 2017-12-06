<template>
  <div class="web">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Services WEB
          </h1>
          <h2 class="subtitle">
            Intranet, accés a internet
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <router-link tag="li" to="intranet">
                <a>Intranet</a>
              </router-link>
              <router-link tag="li" to="webaccess">
                <a>Accés a internet</a>
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
  name: 'web',
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
