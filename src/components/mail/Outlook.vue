<template>
  <div class="outlook">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <b-tooltip label="Disponible uniquement sur les postes de l'école"
            type="is-light"
            position="is-bottom">
            <button class="button is-info is-medium">Accéder au service</button>
          </b-tooltip>
          <b-tooltip label="Indisponible"
            type="is-light"
            position="is-bottom">
            <button class="button is-outlined is-medium">Documentation</button>
          </b-tooltip>
        </div>
        <div class="tile is-child box">
          <div class="content">
            <h3>Outlook</h3>
            <p><strong>Utilisation de outlook, automatiquement configuré sur les postes de l'école</strong></p>
            <blockquote>Outlook permet un accés simplifié à vos mails depuis les postes de l'école. L'application est automatiquement configurée lors que vous vous authentifiez sur un poste.</blockquote>
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
  name: 'outlook',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
