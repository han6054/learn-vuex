import Vuex from 'vuex'

function createStore() {
    return new Vuex.Store({
        state: {
            count: 10,
            message: 'hello message!'
        },
        mutations: {
            increment(state) {
                state.count++;
            }
        }
    })
}

export default createStore