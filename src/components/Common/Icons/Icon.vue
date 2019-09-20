<template lang="pug">
.icon-wrapper
    .icon
        Reviews(
            v-if="type === 'reviews'"
        )
        Unanswered(
            v-if="type === 'unanswered'"
        )
        Update(
            v-if="type === 'update'"
        )
        Star(
            v-if="type === 'averageRating' || type === 'star' || type === 'goldStar'"
            :size="type === 'averageRating' ? 38 : 16"
            :type="type"
        )
        Bell(
            style="margin-top: 2px"
            v-if="type === 'bell'"
        )
        Refresh.refresh-animate(
            v-if="type === 'refresh'"
            style="margin-bottom: -3px; margin-left: -4px"
        )
        Success(
            v-if="type === 'successWhite' || type === 'successBlack'"
            :color="type === 'successWhite' ? 'white' : 'black'" 
        )
</template>

<script>
import Reviews from '@/components/Common/Icons/Reviews'
import Unanswered from '@/components/Common/Icons/Unanswered'
import Update from '@/components/Common/Icons/Update'
import Star from '@/components/Common/Icons/Star'
import Refresh from '@/components/Common/Icons/Refresh'
import Success from '@/components/Common/Icons/Success'
import Bell from '@/components/Common/Icons/Bell'

export default {
    name: 'Icon',
    props: {
        type: String,
        size: Number,
        color: String
    },
    components: {
        Reviews,
        Unanswered,
        Update,
        Star,
        Refresh,
        Success,
        Bell
    }
}
</script>

<style lang="sass" scoped>
.icon-wrapper
    // width: 10px
    display: grid
    align-items: center
    justify-items: center

.refresh-animate
    animation: spin 1500ms infinite ease-in-out

@keyframes spin 
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(720deg)
    

</style>