<template>
  <div class="app">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <b-tooltip label="Indisponible"
            type="is-light"
            position="is-bottom">
            <button class="button is-outlined is-medium">Documentation</button>
          </b-tooltip>
        </div>
        <div class="tile is-child box">
          <div class="content">
            <h3>Application tierce</h3>
            <p>Il est possible de configurer facilement une app, pour qu'elle accéde a votre adresse mail de l'école.</p>
            <blockquote>Si vous utilisés une application spécifique pour gérer vos mail (thunderbird, airmail, spark), il est possible de configurer cette application pour qu'elle accéde a vos mails de l'école.</blockquote>
            <h4>Destiné à</h4>
            <p>Eléves, Ensegnants, Employés</p>
            <h4>Disponibilité</h4>
            <p>Sauf préavis, service disponible 24/24 7/7</p>
            <h4>Support</h4>
            <p><a>support@cpnv.ch</a></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
