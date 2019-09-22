import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Кастомная директива для закрытия popup-меню, после клика вне этого меню 
// есть небольшой баг ("cannot read property $ref of undefined"), не влияющий на работоспособность
let handleOutsideClick
Vue.directive('click-outside', {
    bind (el, binding, vnode) {
        handleOutsideClick = (e) => {
            e.stopPropagation()
            const { handler, exclude } = binding.value

            let clickedOnExcludedEl = false

            exclude.forEach(refName => {
                if (!clickedOnExcludedEl) {
                    const excludedEl = vnode.context.$refs[refName].$refs[refName]
                    clickedOnExcludedEl = excludedEl.contains(e.target)
                }
            })

            if (!el.contains(e.target) && !clickedOnExcludedEl) {
            vnode.context[handler]()
            }
            
        }
        document.addEventListener('click', handleOutsideClick)
        document.addEventListener('touchstart', handleOutsideClick)
    },

    unbind () {
        document.removeEventListener('click', handleOutsideClick)
        document.removeEventListener('touchstart', handleOutsideClick)
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
