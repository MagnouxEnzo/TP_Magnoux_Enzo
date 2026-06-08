<script>

export default {
    name: 'Column',
    props: {
        title: String
    }
};
</script>

<template>
  <div class="column">
    <h2 class="column-title">{{ title }}</h2>
    <div class="column-content">
      <slot>Emplacement pour les cartes de quête</slot>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

.column {
  flex: 1;
  min-width: 280px;
  background-color: #161616;
  border: 2px solid #333;
  padding: 1rem;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8), 0 4px 10px rgba(0, 0, 0, 0.5);
}

.column-title {
  font-family: 'Rye', serif;
  color: #b31010;
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 0.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 2px dashed #b31010;
}

.column-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>