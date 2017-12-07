<template>
  <div class="webmail">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <b-tooltip label="Disponible via un navigateur"
            type="is-light"
            position="is-bottom">
            <a class="button is-info is-medium" href="mail.cpnv.ch">Accéder au service</a>
          </b-tooltip>
          <b-tooltip label="Indisponible"
            type="is-light"
            position="is-bottom">
            <button class="button is-outlined is-medium">Documentation</button>
          </b-tooltip>
        </div>
        <div class="tile is-child box">
          <div class="content">
            <h3>Webmail</h3>
            <blockquote>Se service webmail vous offre un accés a vos mails de l'école ou que vous soyez sans besoin d'installer une application.</blockquote>
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
  name: 'webmail',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
