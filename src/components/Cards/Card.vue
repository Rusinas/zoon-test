<template lang="pug">
.card(:class="card.state")
    .disabled(v-if="card.disabled")
      .name {{ card.title }}
      .disabled-text Площадка отключена
    template(v-else)
      .info
          .name {{ card.title }}
          .tips
            .tip(v-if="card.places && card.places.total && card.places.total === card.places.customized")
              Divider
              | Все {{ card.places.total }} заведений настроены
            template(v-else-if="card.places && card.places.total")
              .tip
                Divider
                | {{ card.places.total }} заведений
              .tip(v-if="card.places.customized")
                Divider
                | {{ card.places.customized }} настроено
            .tip(v-if="card.places && card.places.inSearch")
              Divider
              | {{ card.places.inSearch }} в поиске
      .status
          .status-item.success(v-if="card.status && card.status.synced") 
            Icon(type="successWhite")
            | Синхронизировано
          .status-item(v-if="card.status && card.status.creatingPages")
            Icon(type="refresh")
            | Создаем {{ card.status.creatingPagesAmount }} страницы
          .status-item(v-if="card.status && card.status.info")
            Icon(type="successBlack")
            | Инфа
          .status-item(v-if="card.status && card.status.price")
            Icon(type="successBlack")
            | Прайс
          .status-item(v-if="card.status && card.status.photos")
            Icon(type="successBlack")
            | Фото
          .status-item(v-if="card.status && card.status.specialOffers")
            Icon(type="successBlack")
            | Акции
      .bottom-row
          .rating-and-reviews
              .without-rating(v-if="!card.rating && (!card.places || !card.places.searching)")
                Icon(type="star")
                | Портал без рейтинга
              .rating(v-if="card.rating")
                .rating-icon
                  Icon(type="goldStar")
                | {{ card.rating }} из 5
              .searching(v-if="card.places && card.places.searching") Поиск заведений: 15 из 78...
              .reviews(v-if="card.rating && card.review") 
                Divider.hide-on-mobile(color="black" v-if="card.review") 
                | {{ card.review }} отзывов 
                span(v-if="card.reply") , &nbsp;
                span(v-if="card.reply") {{ card.reply }} неотвеченных
          .actions
              .action-needed(v-if="card.actionsNeeded")
                Icon(type="bell")
                | Требует действий
              .action(v-if="card.update") {{ card.update }} обновления
    Dots.dots(@click.native="showMenu = !showMenu" ref="menuDots")
      
    Menu.menu(
      v-click-outside="{ exclude: ['menuDots'], handler: 'onClose' }" 
      v-show="showMenu" 
      :item="card.disabled ? 'enable' : 'disable'"
      )

</template>

<script>
import Divider from '@/components/Common/Divider'
import Icon from '@/components/Common/Icons/Icon'
import ContextMenuDots from '@/components/Cards/ContextMenuDots'
import Menu from '@/components/Cards/Menu'

export default {
    name: 'Card',
    props: {
      card: Object
    },
    components: {
        Divider,
        Icon,
        Menu,
        Dots: ContextMenuDots
    },
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      onClose () {
        this.showMenu = false
      }
    }

}
</script>

<style lang="sass" scoped>
.card
  display: grid
  position: relative
  width: 100%
  grid-gap: 8px
  box-sizing: border-box
  background-color: white
  padding: 18px 18px 18px 30px
  border-radius: 4px
  border: 1px solid #E6ECF2
  &::after
    content: ''
    position: absolute
    background-color: $accent
    top: -1px
    left: -1px
    width: 2px
    height: 100%
    border: 1px solid $purple-border
    border-radius: 4px 0 0 4px

.purple
  &::after
    background-color: $purple-border
    border-color: $purple-border

.orange
  &::after
    background-color: $gold
    border-color: $gold

.gray
  &::after
      background-color: $gray-border
      border-color: $gray-border

.info
  display: flex
  flex-wrap: wrap
  align-items: center
  align-content: center

.name
  font-size: 16px
  font-weight: 700
  margin-bottom: 2px
  @include for-phone-only
    font-size: 22px
    margin-bottom: 10px

.tips
  display: flex
  flex-wrap: wrap
  align-items: center
  color: #BBBCC4

.tip
  display: flex
  align-items: center
  margin-bottom: 2px
  @include for-phone-only
    margin-bottom: 10px

.status
  display: flex
  flex-wrap: wrap

.status-item
  display: grid
  margin-bottom: 10px
  grid-gap: 3px
  cursor: pointer
  grid-template-columns: 13px 1fr
  grid-template-areas: "icon text"
  padding: 6px 10px
  border-radius: 4px
  align-content: center
  border: 1px solid #E6ECF2
  margin-right: 10px
  
.success
  border: none
  color: white
  background-color: $purple-border

.rating, .without-rating
  display: grid
  align-items: center
  grid-template-columns: 18px 1fr
  grid-gap: 5px
  color: $gold
  font-weight: 700
  margin-bottom: 5px
  @include for-phone-only
    margin-right: 10px

.without-rating
  color: #BBBCC4

.bottom-row
  display: flex
  align-items: center
  align-content: center
  justify-content: space-between
  font-size: 13px

.searching
  color: #BBBCC4

.rating-and-reviews
  display: flex
  flex-wrap: wrap
  align-items: center

.reviews
  display: flex
  flex-wrap: wrap
  align-items: center
  margin-bottom: 5px

.actions
  color: #694CAF
  padding-left: 5px
  margin-bottom: 5px

.action
  cursor: pointer
  display: flex
  flex-wrap: no-wrap

.action-needed
  cursor: pointer 
  text-align: center
  display: grid
  grid-template-columns: 15px 1fr
  grid-gap: 5px
  align-content: center
  align-items: center
  justify-content: center
  justify-items: center
  background-color: $gold
  color: white
  padding: 5px 10px 
  border-radius: 4px
  @include for-phone-only
    font-size: 13px

.dots
  position: absolute
  top: 20px
  right: 20px

.menu
  position: absolute
  top: 50px
  right: -3px

.disabled
  color: #BBBCC4

.disabled-text
  margin-top: 8px

.hide-on-mobile
  @include for-phone-only
    display: none

</style>