<template>
  <div class="container my-container">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article v-on:click="click('mails/outlook')" class="tile is-child notification is-info">
              <h1 class="title">Messagrie</h1>
              <h2 class="subtitle">Mail, listes de diffusion</h2>
              <p>Comment utiliser les outils de messagerie, configurer une application avec votre compte de l'école.</p>
            </article>
            <article v-on:click="click('network/sharedfolders')" class="tile is-child notification is-warning">
              <h1 class="title">Ressources réseau</h1>
              <h2 class="subtitle">Accés local et a distance</h2>
              <p>Comment accéder au ressources depuis les machine de l'école, ou depuis des machines externes.</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article v-on:click="click('printers/drivers')" class="tile is-child notification is-success">
              <h1 class="title">Impression</h1>
              <h2 class="subtitle">Ajout et configuration</h2>
              <p>Comment accéder aux imprimentes du réseau, configurer les drivers, accés depuis une machine externe au réseau.</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article v-on:click="click('web/intranet')" class="tile is-child notification is-info">
            <h1 class="title">Services WEB</h1>
            <h2 class="subtitle">Intranet, accés a internet</h2>
            <p>Intranet, quels identifiants utiliser, comment utiliser les applications. Gestion des accés internet aux classes.</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article v-on:click="click('authentication/password')" class="tile is-child notification is-warning">
          <h1 class="title">Authentification</h1>
          <h2 class="subtitle">Identifients, mot de passe</h2>
          <p>Comment obtenir ses identifiants, restaurer un mot de passe oublié.
            Quels sont les droits des différents types de profils dans le domaine du cpnv.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    click (link) {
      this.$router.push('/' + link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

article:hover {
  cursor: pointer;
}
</style>
