<template>
  <div class="datacpnv">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <b-tooltip label="Disponible via un navigateur"
            type="is-light"
            position="is-bottom">
            <a class="button is-warning is-medium" href="data.cpnv.ch">Accéder au service</a>
          </b-tooltip>
          <b-tooltip label="Indisponible"
            type="is-light"
            position="is-bottom">
            <button class="button is-outlined is-medium">Documentation</button>
          </b-tooltip>
        </div>
        <div class="tile is-child box">
          <div class="content">
            <h3>data.cpnv.ch</h3>
            <blockquote>Vous permet d'accéder au lecteurs réseau de l'école depuis l'éxtérieur de l'école via une interface réseau.</blockquote>
            <h4>Destiné à</h4>
            <p>Eléves, Ensegnants, Employés</p>
            <h4>Disponibilité</h4>
            <p>Sauf préavis, service disponible 24/24 7/7</p>
            <p><strong>Attention, ce service n'est pas accésible depuis le réseau de l'école.</strong></p>
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
  name: 'datacpnv',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
