<script>
    export default {
        name: 'Card',
        props: {
            id : Number,
            title: String,
            description: String,
            difficulty: String,
            reward: String,
            status: String
        },
        methods: {
            editQuest() {
                this.$router.push({ name: 'FormEdit', params: { id: this.id } });
            },
            deleteQuest() {
                this.$emit('deleteQuest', { id: this.id });
            }
        }
    };
    
</script>

<template>
  <div class="card">
      <h3 id="qTitle">{{ title }}</h3>
      <p id="qDescription">{{ description }}</p>
      <p id="qDifficulty">Niveau: {{ difficulty }}</p>
      <p id="qReward">Récompense: {{ reward }} ฿</p>
      <p id="qStatus">Statut: {{ status }}</p>
      <button id="editButton" @click="editQuest">Modifier</button>
      <button id="deleteButton" @click="deleteQuest">Supprimer</button>
  </div>
</template>

<style scoped>

</style>