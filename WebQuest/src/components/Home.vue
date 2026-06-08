<script>
import Card from './Card.vue';
import Column from './Column.vue';
import Board from './Board.vue';
class Quest {
        constructor(id, title, description, difficulty,reward, status){
            this.id = id;
            this.title = title;
            this.description = description;
            this.difficulty = difficulty;
            this.reward = reward;
            this.status = status;
        }
    }

    const defaultQuests = [//tableau par defaut au cas où il n'y a pas de quêtes
        new Quest(1, "Quête 1", "Description de la quête 1", "Facile", "1", "A faire"),
        new Quest(2, "Quête 2", "Description de la quête 2", "Moyen", "2", "En cours"),
        new Quest(3, "Quête 3", "Description de la quête 3", "Difficile", "3", "Terminée"),
        new Quest(4, "Quête 4", "Description de la quête 4", "Facile", "1", "Echouée")
];


export default {
  name: 'Home',
  components: {
    Card,
    Column,
    Board
  },
  data() {
    return {
      Quests: [],
    };
  },
  mounted() {
    const saved = localStorage.getItem('Quests');
    if (saved) {//Si il y a des quêtes afficher le tableau de ces quêtes
        this.Quests = JSON.parse(saved);
    } else {//sinon afficher le tableau par défaut
        localStorage.setItem('Quests', JSON.stringify(defaultQuests));
        this.Quests = defaultQuests;
    }
  },
  methods: {
    deleteQuest(quest) {
        this.Quests.splice(this.Quests.indexOf(q => Number(q.id) === Number(quest.id)), 1);
        localStorage.setItem('Quests', JSON.stringify(this.Quests));
    },
    editQuest(quest) {
        this.$router.push(`/modifier/${quest.id}`);
    }
  }
};
</script>

<template>
    <main>
        <Board>
        <Column title=" A faire ">
            <card v-for="quest in Quests.filter(q => q.status === 'A faire')" :key = "quest.id"
            :id = "quest.id"
            :title = "quest.title"
            :description = "quest.description"
            :difficulty = "quest.difficulty"
            :reward = "quest.reward"
            :status = "quest.status"
            @deleteQuest="deleteQuest"
            @editQuest="editQuest"
            ></card>
        </Column>
        <Column title=" En cours ">
            <card v-for="quest in Quests.filter(q => q.status === 'En cours')" :key = "quest.id"
            :id = "quest.id"
            :title = "quest.title"
            :description = "quest.description"
            :difficulty = "quest.difficulty"
            :reward = "quest.reward"
            :status = "quest.status"
            @deleteQuest="deleteQuest"
            @editQuest="editQuest"
            ></card>
        </Column>
        <Column title=" Terminée ">
            <card v-for="quest in Quests.filter(q => q.status === 'Terminée')" :key = "quest.id"
            :id = "quest.id"
            :title = "quest.title"
            :description = "quest.description"
            :difficulty = "quest.difficulty"
            :reward = "quest.reward"
            :status = "quest.status"
            @deleteQuest="deleteQuest"
            @editQuest="editQuest"
            ></card>
        </Column>
        <Column title=" Echouée ">
            <card v-for="quest in Quests.filter(q => q.status === 'Echouée')" :key = "quest.id"
            :id = "quest.id"
            :title = "quest.title"
            :description = "quest.description"
            :difficulty = "quest.difficulty"
            :reward = "quest.reward"
            :status = "quest.status"
            @deleteQuest="deleteQuest"
            @editQuest="editQuest"
            ></card>
        </Column>
        </Board>
    </main>
</template>

<style scoped>
main {
  padding: 1rem 0;
}
</style>