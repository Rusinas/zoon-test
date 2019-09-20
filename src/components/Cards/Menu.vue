<template lang="pug">
.menu
    .menu-element(v-if="item === 'enable'") Включить
    .menu-element(v-if="item === 'disable'") Выключить
</template>

<script>
export default {
    props: {
        item: String
    }
}
</script>

<style lang="sass" scoped>
.menu
    cursor: pointer
    position: relative
    padding: 1em 1.2em
    border: 1px solid #E8E8E8
    border-radius: 4px
    background-color: white
    &::before
        content: ''
        position: absolute
        width: 14px 
        height: 14px 
        border-left: 1px solid #E8E8E8
        border-top: 1px solid #E8E8E8
        background-color: white
        top: -8px
        right: 15px
        transform: rotate(45deg)
    &:hover .menu-element
        color: $accent

.menu-element
    font-size: 16px
    transition: all 100ms linear
</style>