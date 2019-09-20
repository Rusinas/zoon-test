<template lang="pug">
.dots(ref="menuDots")
    .dot
    .dot
    .dot
</template>

<script>
export default {
    name: 'ContextMenuDots'
}
</script>

<style lang="sass" scoped>
.dots
    cursor: pointer
    display: grid
    align-items: center
    justify-items: center
    margin-right: -4px
    width: 8px
    height: 18px
    grid-gap: 3px
    &:hover .dot
        background-color: $accent
    @include for-phone-only
        height: 28px
        grid-gap: 5px

.dot
    width: 4px
    height: 4px 
    background-color: #CFD5DB
    border-radius: 2px
    transition: background-color 100ms linear

</style>