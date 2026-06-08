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
                const Quests = localStorage.getItem('Quests') ? JSON.parse(localStorage.getItem('Quests')) : [];

                const newQuest = {
                    id: Quests.length > 0 ? Math.max(...Quests.map(q => q.id)) + 1 : 1,
                    title: this.title,
                    description: this.description,
                    difficulty: this.difficulty,
                    reward: this.reward.toString(),
                    status: 'A faire'
                };

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
    <main class="rdr-form-container">
        <div class="rdr-paper-ledger">
            <h2 class="rdr-form-title">Rédiger un contrat</h2>
            <form @submit.prevent="addQuest" class="rdr-form">
                
                <div class="form-group">
                    <label for="title">Titre:</label>
                    <input v-model="title" type="text" id="title" name="title" required />
                </div>

                <div class="form-group">
                    <label for="description">Détails du contrat:</label>
                    <textarea v-model="description" id="description" name="description" rows="4" required></textarea>
                </div>

                <div class="form-group-row">
                    <div class="form-group">
                        <label for="difficulty">Difficulté:</label>
                        <select v-model="difficulty" id="difficulty" name="difficulty" required>
                            <option value="Facile">Facile</option>
                            <option value="Moyen">Moyen</option>
                            <option value="Difficile">Difficile</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="reward">Prime (฿):</label>
                        <input v-model="reward" type="number" id="reward" name="reward" required />
                    </div>
                </div>

                <div class="form-actions">
                    <button type="submit" class="btn-submit">Publier l'avis</button>
                    <router-link to="/" class="btn-cancel">Annuler</router-link>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Rye&display=swap');

.rdr-form-container {
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
}

.rdr-paper-ledger {
    background-color: #f5f2eb;
    color: #111111;
    font-family: 'Special+Elite', 'Courier New', monospace;
    width: 100%;
    max-width: 650px;
    padding: 2.5rem;
    border: 5px double #000000;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

.rdr-form-title {
    font-family: 'Rye', serif;
    text-transform: uppercase;
    text-align: center;
    color: #b31010;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom: 2px dashed #b31010;
    padding-bottom: 0.5rem;
}

.rdr-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group-row {
    display: flex;
    gap: 1.5rem;
}

.form-group-row .form-group {
    flex: 1;
}

label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
}

input[type="text"],
input[type="number"],
textarea,
select {
    font-family: 'Special+Elite', monospace;
    background-color: transparent;
    color: #111111;
    border: 2px solid #000000;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 0;
    outline: none;
    transition: background-color 0.2s;
}

input:focus,
textarea:focus,
select:focus {
    background-color: rgba(179, 16, 16, 0.05);
    border-color: #b31010;
}

textarea {
    resize: vertical;
}

.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

button, .btn-cancel {
    flex: 1;
    font-family: 'Special+Elite', monospace;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
    transition: all 0.2s ease;
}

.btn-submit {
    background-color: #b31010;
    color: #f5f2eb;
    border: 2px solid #b31010;
    box-shadow: 3px 3px 0 #000;
}

.btn-submit:hover {
    background-color: #000000;
    border-color: #000000;
    color: #f5f2eb;
}

.btn-cancel {
    background-color: transparent;
    color: #000000;
    border: 2px solid #000000;
}

.btn-cancel:hover {
    background-color: #b31010;
    color: #f5f2eb;
    border-color: #b31010;
}
</style>