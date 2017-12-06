<template>
  <div class="mails">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Mails
          </h1>
          <h2 class="subtitle">
            Centre Profesionnel du Nord Vaudois
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <li class="is-active"><router-link to="exchange">Exchange</router-link></li>
              <li><router-link to="tutu">Tutu</router-link></li>
              <li><a>Videos</a></li>
              <li><a>Documents</a></li>
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
  name: 'Mails',
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
