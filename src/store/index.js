import { createStore } from "redux"


function updateCounter(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREMENT_COUNTER':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}


const store = createStore(updateCounter)

export default store