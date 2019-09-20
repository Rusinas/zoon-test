<template lang="pug">
svg(
    xmlns="http://www.w3.org/2000/svg" 
    width="8.75" 
    height="10" 
    viewBox="0 0 8.75 10"
)
    g(
        id="refresh" 
        fill="none" 
        stroke-miterlimit="10"
    )
        path(
            d="M2.823,10,8.75,1.98V0L2.829,8.072,0,4.437v1.9Z" 
            stroke="none"
        )
        path(
            d="M 2.823060035705566 10 L 0 6.341529846191406 L 0 4.436729907989502 L 2.82856011390686 8.071999549865723 L 8.75 0 L 8.75 1.980329990386963 L 2.823060035705566 10 Z" 
            stroke="none" 
            :fill="color"
        )
</template>

<script>
export default {
    name: 'SuccessIcon',
    props: {
        color: String
    }
}
</script>