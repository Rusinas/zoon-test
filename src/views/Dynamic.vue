<template lang="pug">
.wrapper
  Dashboard(:widgets="widgets")
  Cards(:data="jsonData")
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
      states: [
        'purple',
        'orange',
        'gray'
      ],
      widgets: [
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
      jsonData: [
        {
          id: 1,
          disabled: false,
          title: 'Google',
          state: 'purple',
          rating: 5,
          review: 4, 
          reply: 3,
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
          title: 'Yandex',
          state: 'gray',
          rating: 4,
          review: 3,
          reply: 2,
          update: 1,
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
          id: 3,
          disabled: false,
          title: 'Rambler',
          state: 'orange',
          rating: 3,
          review: 2,
          reply: 1,
          update: 0,
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
          id: 4,
          disabled: false,
          title: '2gis',
          state: 'gray',
          rating: 2,
          review: 1,
          reply: 0,
          update: 0,
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
          id: 5,
          disabled: false,
          title: 'Waze',
          state: 'gray',
          rating: 1,
          review: 0,
          reply: 0,
          update: 0,
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
        }
      ]
    }
  },
  mounted() {
    this.init()
    this.initAutoupdateInterval()
  },
  beforeDestroy() {
    clearInterval(this.initAutoupdateInterval)
  },
  methods: {
    init() {
      this.calculateWidgetsData()
      this.sortObjects()
    },
    initAutoupdateInterval() {
      setInterval(() => {
        this.updateRandomObject()
        this.init()
      }, this.random(5, 10) * 1000)
    },
    random(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
    },
    sortObjects() {
      this.jsonData = this.jsonData.sort((a, b) => {
        const valueA = a.state === 'purple' ? 1 : a.state === 'orange' ? 2 : a.state === 'gray' ? 3 : null
        const valueB = b.state === 'purple' ? 1 : b.state === 'orange' ? 2 : b.state === 'gray' ? 3 : null
        return valueA - valueB;
      })
    },
    calculateWidgetsData() {
      const data = this.jsonData;
      const widgets = this.widgets;

      const reviewsWidget = widgets.find(widget => widget.type === 'reviews');
      const unansweredWidget = widgets.find(widget => widget.type === 'unanswered');
      const updateWidget = widgets.find(widget => widget.type === 'update');
      const averageRatingWidget = widgets.find(widget => widget.type === 'averageRating');

      reviewsWidget.value = data.map(item => item.review).reduce(reducer);
      unansweredWidget.value = data.map(item => item.reply).reduce(reducer);
      updateWidget.value = data.map(item => item.update).reduce(reducer);
      averageRatingWidget.value = countRating(data);

      function countRating(data) {
        const ratings = data.map(item => item.rating);
        const ratingsSum = ratings.reduce(reducer);
        const average = (ratingsSum / ratings.length).toFixed(1);
        return parseFloat(average);
      }

      function reducer(acc, current) {
        return acc + current;
      }
    },
    updateRandomObject() {
      const data = this.jsonData;
      const obj = data[Math.floor(Math.random() * data.length)];
      
      obj.state = this.states[Math.floor(Math.random() * this.states.length)];
      obj.rating = this.random(1, 5);
      obj.review = this.random(0, 200);
      obj.reply = this.random(0, 20);
      obj.update = this.random(0, 5);
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
