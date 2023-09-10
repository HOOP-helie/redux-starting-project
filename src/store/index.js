import { createStore } from "redux"


function updateCounter(state = { counter: 0, showBtn: true }, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT_COUNTER':
            return { ...state, counter: state.counter - 1 }
        case 'TOGGLE_BTN':
            return { ...state, showBtn: !state.showBtn }
        default:
            return state
    }
}


const store = createStore(updateCounter)

export default store