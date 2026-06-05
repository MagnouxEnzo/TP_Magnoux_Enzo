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
        <h2> {{ title }} </h2>
        <slot>
            Emplacement pour les cartes de quête
        </slot>
    </div>
</template>

<style scoped>
</style>