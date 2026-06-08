<template>
  <div id="rdr2-app">
    <header class="rdr-header">
      <h1 class="rdr-title">West Quest</h1>
      <nav class="rdr-nav">
        <router-link to="/" class="rdr-btn">Recueil des contrats</router-link>
        <router-link to="/ajouter" class="rdr-btn">Ajouter des contrats</router-link>
      </nav>
    </header>
    
    <main class="rdr-main">
      <div class="rdr-container">//Permet d'insérer ici en dessous du header les différents components 
                                // de l'application comme le board ou bien les Form 
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&family=Special+Elite&family=Ultra&display=swap');

#rdr2-app {
  background-color: #111111; 
  color: #f5f2eb;
  font-family: 'Special+Elite', 'Courier New', monospace;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.rdr-header {
  background-color: #b31010;
  text-align: center;
  padding: 2rem 1rem;
  border-bottom: 5px solid #000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
}

.rdr-title {
  font-family: 'Rye', serif;
  font-size: 3.5rem;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0 0 1.5rem 0;
  text-shadow: 2px 2px 0px #f5f2eb;
}

.rdr-nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.rdr-btn {
  font-family: 'Rye', serif;
  background-color: #000000;
  color: #f5f2eb;
  padding: 0.8rem 1.8rem;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  border: 2px solid #f5f2eb;
  transition: all 0.2s ease-in-out;
  box-shadow: 3px 3px 0px #b31010;
  cursor: pointer;
}

.rdr-btn:hover, .rdr-btn-active {
  background-color: #f5f2eb;
  color: #b31010;
  border-color: #b31010;
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px #000000;
}


.router-link-active {
  background-color: #f5f2eb;
  color: #000000;
  border-color: #000000;
}

.rdr-main {
  flex: 1;
  padding: 2rem;
}

.rdr-container {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #1a1a1a;
  border: 3px double #b31010;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
</style>