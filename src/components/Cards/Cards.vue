<template lang="pug">
transition-group.cards(name="flip-list" tag="div")
    Card(
        v-for="(card, index) in data"
        :key="card.title"
        :card="card"
        style="transition: all 1s;"
    ) 
</template>

<script>
import Card from '@/components/Cards/Card'

export default {
    name: 'CardsWrapper',
    props: {
        data: Array
    },
    components: {
        Card
    }    
}
</script>

<style lang="sass" scoped>
.cards
  display: grid
  grid-gap: 1em
  width: 100%

.flip-list-move 
  transition: transform 1s

</style>