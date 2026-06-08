<script></script>

<template>
  <div class="board">
    <slot>Emplacement pour les colonnes de quête</slot>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 0;
  align-items: flex-start;
  scrollbar-width: thin;
  scrollbar-color: #b31010 #111;
}

.board::-webkit-scrollbar {
  height: 8px;
}
.board::-webkit-scrollbar-track {
  background: #111;
}
.board::-webkit-scrollbar-thumb {
  background-color: #b31010;
  border-radius: 0;
}
</style>