<template lang="pug">
.wrapper
    .greetings
        h2 Приветствую!
        p В первую очередь, хотелось бы поблагодарить за крайне интересное задание. Работать над ним было одно удовольствие. 
            | Я старался выполнить его максимально качественно, при этом постараться успеть в сжатые сроки. Управился за сутки, но при этом некоторые шероховатости есть, да.
        p Так как было позволено использовать фреймворки, хотя и предпочтительнее было показать навыки Vanilla, я решил использовать Vue, так как в данной задаче это позволило сэкономить кучу времени и не изобретать велосипеды. 
        p Тем более, что вакансия подразумевает работу на нём, было бы логично продемонстрировать, что я умею :)
        p Посмотреть на результаты первого задания:
        router-link.button(to="/static") Статическая версия (по макету)
        p Результаты второго задания:
        router-link.button(to="/dynamic") Динамическая версия
</template>

<style lang="sass" scoped>
.wrapper
    display: grid
    align-items: center
    justify-items: center
    width: 100%
    min-height: 100vh
    font-size: 16px

.greetings
    max-width: 700px
    width: 100%
    padding: 2em
    text-align: center
    box-sizing: border-box
    & p 
        line-height: 2em
a
    text-decoration: none
    &:visited
        color: white

.button
    cursor: pointer
    padding: 10px 20px
    background-color: $accent
    color: white
    transition: background-color 100ms linear
    &:hover
        background-color: darken($accent, 5%)
</style>