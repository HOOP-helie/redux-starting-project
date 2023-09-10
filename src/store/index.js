import { createStore } from "redux"


function updateCounter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1
        default:
            return state
    }
}


const store = createStore(updateCounter, 0)

export default store