<template lang="pug">
.dashboard
  Widget(
    v-for="(widget, index) in widgets"
    :key="index"
    :type="widget.type"
    :value="widget.value"
  )
</template>

<script>
import Widget from '@/components/Dashboard/Widget'

export default {
    name: 'Dashboard',
    props: {
      widgets: Array
    },
    components: {
      Widget
    }
}
</script>

<style lang="sass" scoped>
.dashboard
  display: grid
  width: 100%
  grid-gap: 5px
  grid-template-columns: repeat(4, 1fr)
  @include for-phone-only
    grid-template-columns: 1fr
  @include for-tablet-portait-only
    grid-template-columns: repeat(2, 1fr)
</style>