<script>
import { routerKey } from 'vue-router';

export default {
  name: 'App'
};
</script>

<template>
  <header>
    <h1>Web Quest</h1>
    <nav>
      <button><router-link to="/">Recueuil des quêtes</router-link></button>
      <button><router-link to="/ajouter">Ajouter des quêtes</router-link></button>
      <button><router-link to="/contact">Contact</router-link></button>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
