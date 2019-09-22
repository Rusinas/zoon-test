<template lang="pug">
.wrapper
    Dashboard(:widgets="staticWidgets")
    Cards(:data="staticData")
</template>

<script>
import Dashboard from '@/components/Dashboard/Dashboard'
import Cards from '@/components/Cards/Cards'

export default {
    name: 'Static',
    components: {
        Dashboard,
        Cards
    },
    data() {
        return {
            staticWidgets: [
                {
                    type: 'reviews',
                    value: 165,
                },
                {
                    type: 'unanswered',
                    value: 21,
                },
                {
                    type: 'update',
                    value: 59,
                },
                {
                    type: 'averageRating',
                    value: 4.5,
                }
            ],
            staticData: [
                {
                    id: 1,
                    disabled: false,
                    title: 'Google',
                    state: 'purple',
                    rating: 4.5,
                    review: 198, 
                    reply: 15,
                    update: 2,
                    places: {
                        total: 30,
                        customized: 30,
                        inSearch: 0
                    },
                    status: {
                        synced: true,
                        creatingPages: false,
                        creatingPagesAmount: 0,
                        info: true,
                        price: true, 
                        photos: true,
                        specialOffers: true
                    },
                    actionsNeeded: false
                },
                {
                    id: 2,
                    disabled: false,
                    title: 'Flado',
                    state: 'purple',
                    rating: null,
                    review: null,
                    reply: null,
                    update: null,
                    places: {
                        total: 30,
                        customized: 4,
                        inSearch: 20,
                        searching: false
                    },
                    status: {
                        synced: false,
                        creatingPages: true,
                        creatingPagesAmount: 3,
                        info: true,
                        price: true, 
                        photos: true,
                        specialOffers: true
                    },
                    actionsNeeded: true
                },
                {
                    id: 3,
                    disabled: false,
                    title: '2Gis',
                    state: 'gray',
                    rating: null,
                    review: null,
                    reply: null,
                    update: 0,
                    places: {
                        searching: {
                            found: 15,
                            queue: 78
                        }
                    },
                    status: {
                        synced: false,
                        creatingPages: true,
                        creatingPagesAmount: 3,
                        info: false,
                        price: false, 
                        photos: false,
                        specialOffers: false
                    },
                    actionsNeeded: true
                },
                {
                    id: 4,
                    disabled: true,
                    title: 'Yell',
                    state: 'gray',
                    rating: null,
                    review: null,
                    reply: null,
                    update: null,
                    places: null,
                    status: null,
                    actionsNeeded: false
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.wrapper
    display: grid
    grid-gap: 2em
    margin-top: 2em
    justify-items: center
    width: 100%
    max-width: 1105px // для пиксель пёрфекта)
    padding: 0 25px 50px
    box-sizing: border-box
</style>
