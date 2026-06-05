<script>
    export default {
        name: 'Form',
        data() {
            return {
                title: '',
                description: '',
                difficulty: 'Facile',
                reward: ''
            };
        },
        methods: {
            addQuest() {
                const newQuest = {
                    id: Quests.length > 0 ? Math.max(...Quests.map(q => q.id)) + 1 : 1,
                    title: this.title,
                    description: this.description,
                    difficulty: this.difficulty,
                    reward: this.reward.toString(),
                    status: 'A faire'
                };

                const Quests = localStorage.getItem('Quests') ? JSON.parse(localStorage.getItem('Quests')) : [];
                Quests.push(newQuest);
                localStorage.setItem('Quests', JSON.stringify(Quests));

                this.title = '';
                this.description = '';
                this.difficulty = 'Facile';
                this.reward = '';

                this.$router.push('/');
            }
        },
    };
</script>

<template>
    <main>
        <div>
            <h2>Ajouter une quête</h2>
            <form @submit.prevent="addQuest">
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

            <button type="submit">Ajouter la quête</button>
            </form>
        </div>
    </main>
</template>

<style scoped>
</style>