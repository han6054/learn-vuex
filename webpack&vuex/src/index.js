import Vue from 'vue'
import Vuex from 'vuex'
import createStore from './store'

Vue.use(Vuex)
const store = createStore()
const Counter = {
    data() {
        return {
            start: 5
        }
    },
    template: `<div>{{sayHi}} {{ total }} {{ count }} {{ message }}</div>`,
    computed: {
        sayHi() {
            return 'Hi joker'
        },
        ...Vuex.mapState({
            title: 'count', // 变量重命名 
            count: state => state.count,
            message: state => state.message,
            total: function (state) {
                return this.start + state.count
            }
        })
    }
}
const app = new Vue({
    el: '#app',
    store,
    components: { Counter },
    template:`
    <div class="app">
        <counter></counter>
    </div>
`
})