    <script>        
        export default {
            name: 'FormEdit',
            data() {
                return {
                    title: '',
                    description: '',
                    difficulty: 'Facile',
                    reward: '',
                    status: 'A faire',
                };
            },
            watch: {
                '$route.params.id': {
                    handler: 'loadQuestData',
                    immediate: true
                }
            },
            methods: {
                editQuest() {
                    const newQuest = {
                        id: parseInt(this.$route.params.id),
                        title: this.title,
                        description: this.description,
                        difficulty: this.difficulty,
                        reward: this.reward.toString(),
                        status: this.status
                    };

                    const Quests = localStorage.getItem('Quests') ? JSON.parse(localStorage.getItem('Quests')) : [];
                    const currentId = parseInt(this.$route.params.id);
                    const questIndex = Quests.findIndex(quest => Number(quest.id) === currentId);
                    if (questIndex !== -1) {
                        Quests[questIndex] = newQuest;
                        localStorage.setItem('Quests', JSON.stringify(Quests));
                    }

                    this.title = '';
                    this.description = '';
                    this.difficulty = 'Facile';
                    this.reward = '';
                    this.status = 'A faire';

                    this.$router.push('/');
                },
                loadQuestData() {
                    const questID = this.$route.params.id;
                    if (!questID) return;

                    const Quests = JSON.parse(localStorage.getItem('Quests')) || [];
                    const questToEdit = Quests.find(quest => Number(quest.id) === Number(questID));
                
                    if (questToEdit) {
                        this.title = questToEdit.title;
                        this.description = questToEdit.description;
                        this.difficulty = questToEdit.difficulty;
                        this.reward = questToEdit.reward;
                        this.status = questToEdit.status;
                    } else {
                        console.warn(`Aucune quête trouvée avec l'ID : ${questID}`);
                    }
                },
            },
            
        };
    </script>

    <template>
        <main>
            <div>
                <h2>Modifier une quête</h2>
                <form @submit.prevent="editQuest">
                <label for="title">Titre:</label>
                <input v-model="title" type="text" id="title" name="title" required />

                <label for="description">Description:</label>
                <textarea v-model="description" id="description" name="description" required></textarea>

                <label for="difficulty">Difficulté:</label>
                <select v-model="difficulty" id="difficulty" name="difficulty" required>
                    <option value="Facile">Facile</option>
                    <option value="Moyen">Moyen</option>
                    <option value="Difficile">Difficile</option>
                </select>

                <label for="reward">Récompense:</label>
                <input v-model="reward" type="number" id="reward" name="reward" required />

                <label for="status">Statut:</label>
                <select v-model="status" id="status" name="status" required>
                    <option value="A faire">A faire</option>
                    <option value="En cours">En cours</option>
                    <option value="Terminée">Terminée</option>
                    <option value="Echouée">Echouée</option>
                </select>

                <button type="submit">Modifier la quête</button>
                <button><router-link to="/">Annuler</router-link></button>
                </form>
            </div>
        </main>
    </template>

    <style scoped>
    </style>