<template lang="pug">
.divider-wrapper
    .dot(
        :style="`background-color: ${color || '#BBBCC4'}`"
    )
</template>

<script>
export default {
    name: 'DotDivider',
    props: {
        color: String
    }
}
</script>

<style lang="sass" scoped>
.divider-wrapper
    display: grid
    width: 10px
    height: 100%
    margin: 0 2px
    align-items: center
    justify-items: center

.dot
    width: 2px
    height: 2px
    border-radius: 1px

.black
    background-color: black
</style>