<template lang="pug">
.widget
    .widget-counter {{ animatedValue }}
    .widget-name {{ types[type] }}
    .widget-icon 
        Icon(:type="type")
</template>

<script>
import Icon from '@/components/Common/Icons/Icon'
import { TweenMax } from "gsap/TweenMax"

export default {
    name: 'DashboardWidget',
    props: {
        type: String,
        value: Number
    },
    components: {
        Icon
    },
    data() {
      return {
        types: {
            reviews: 'отзывов',
            unanswered: 'неотвеченный отзыв',
            update: 'обновлений',
            averageRating: 'средний рейтинг'
        },
        tweenedValue: this.value
      }
    },
    computed: {
        animatedValue: function() {
            return this.tweenedValue.toFixed(0)
        }
    },
    watch: {
        value: function(newValue) {
            TweenMax.to(this.$data, 0.5, { tweenedValue: newValue })
        }
    }
}
</script>

<style lang="sass" scoped>
.widget
    cursor: pointer
    position: relative
    display: grid
    align-items: center
    border-radius: 4px
    width: 100%
    min-height: 85px
    color: white
    padding: 1em 25px
    box-sizing: border-box
    background-color: $accent

.widget-counter
    font-size: 25px
    font-weight: 700

.widget-icon
    position: absolute
    right: 15px
    top: 20px

</style>