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
  <div class="card" :class="{
    'status-en-cours': status === 'En cours',
    'status-a-faire': status === 'A faire',
    'status-terminee': status === 'Terminée',
    'status-echouee': status === 'Echouée'
  }">
    <h3 id="qTitle">{{ title }}</h3>
    <p id="qDescription">{{ description }}</p>
    
    <div class="q-details">
      <p id="qDifficulty"><strong>Niveau:</strong> {{ difficulty }}</p>
      <p id="qReward"><strong>Récompense:</strong> {{ reward }} ฿</p>
      <p id="qStatus"><strong>Statut:</strong> {{ status }}</p>
    </div>
    
    <div class="card-actions">
      <button id="editButton" @click="editQuest">Modifier</button>
      <button v-if="status !== 'Terminée'" id="deleteButton" @click="deleteQuest">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Rye&display=swap');

.card {
  background-color: #f5f2eb; 
  color: #111111;
  font-family: 'Special+Elite', 'Courier New', monospace;
  padding: 1.2rem;
  border: 4px solid #000000;
  position: relative;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 5px 5px 0px #b31010;
}

#qTitle {
  font-family: 'Rye', serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  color: #000;
  border-bottom: 1px solid #000;
  padding-bottom: 0.3rem;
  text-align: center;
}

#qDescription {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0.5rem 0 1rem 0;
  font-style: italic;
}

.q-details p {
  margin: 0.2rem 0;
  font-size: 0.85rem;
  text-transform: uppercase;
}


.status-a-faire { border-left: 8px solid #666; }
.status-en-cours { border-left: 8px solid #d47a22; }
.status-terminee { border-left: 8px solid #288034; }
.status-echouee { border-left: 8px solid #b31010; } 


.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  flex: 1;
  font-family: 'Special+Elite', monospace;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #000;
  background: transparent;
  transition: all 0.1s ease;
}

#editButton {
  color: #000;
  background-color: transparent;
}

#editButton:hover {
  background-color: #000;
  color: #f5f2eb;
}

#deleteButton {
  color: #b31010;
  border-color: #b31010;
}

#deleteButton:hover {
  background-color: #b31010;
  color: #f5f2eb;
}
</style>