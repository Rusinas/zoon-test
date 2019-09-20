<template lang="pug">
svg(
    xmlns="http://www.w3.org/2000/svg" 
    :width="size" 
    :height="size" 
    viewBox="0 0 16 15"
)
    path(
        id="star_copy_2" 
        data-name="star copy 2" 
        d="M15.21,5.059l-4.124-.446a.7.7,0,0,1-.555-.4L8.831.52A.9.9,0,0,0,7.2.52l-1.717,3.7a.693.693,0,0,1-.555.4L.8,5.059A.869.869,0,0,0,.3,6.578L3.36,9.318a.676.676,0,0,1,.219.644l-.842,3.978a.9.9,0,0,0,1.33.941l3.6-2.014a.73.73,0,0,1,.69,0l3.6,2.014a.9.9,0,0,0,1.33-.941l-.842-3.978a.631.631,0,0,1,.2-.644l3.063-2.74A.878.878,0,0,0,15.21,5.059Z" 
        :fill="color"
    )
</template>

<script>
export default {
    name: 'StarIcon',
    props: {
        size: Number,
        type: String
    },
    data() {
        return {
            color: this.type === 'averageRating' ? '#58329e' : this.type === 'goldStar' ? '#FFAA30' : '#BBBCC4'
        }
    }
}
</script>