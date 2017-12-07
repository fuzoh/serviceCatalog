<template>
  <div class="sharedfolders">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <b-tooltip label="Disponible uniquement sur les postes de l'école"
            type="is-light"
            position="is-bottom">
            <button class="button is-warning is-medium">Accéder au service</button>
          </b-tooltip>
          <b-tooltip label="Indisponible"
            type="is-light"
            position="is-bottom">
            <button class="button is-outlined is-medium">Documentation</button>
          </b-tooltip>
        </div>
        <div class="tile is-child box">
          <div class="content">
            <h3>Doosiers partagés</h3>
            <p>Service disponible sur les postes de l'école</p>
            <blockquote>Les doosiers partagés vous permmetent de mettre a disposition/accéder a des ressources sauvegardées sur le réseau de l'école, ainsi disponibles à toute heure.</blockquote>
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
  name: 'sharedfolders',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
