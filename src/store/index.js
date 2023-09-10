import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterInitialState = { counter: 0, showBtn: true };

const counterSlice = createSlice({
    name: "counter",
    counterInitialState,
    reducers: {
        increment: state => state.counter++,
        decrement: state => state.counter--,
        toggleBtn: state => !state.showBtn
    }
})
// function updateCounter(action) {
//     switch (action.type) {
//         case 'INCREMENT_COUNTER':
//             return { ...state, counter: state.counter + 1 }
//         case 'DECREMENT_COUNTER':
//             return { ...state, counter: state.counter - 1 }
//         case 'TOGGLE_BTN':
//             return { ...state, showBtn: !state.showBtn }
//         default:
//             return state
//     }
// }


const store = configureStore({ reducer: counterSlice.reducer })

export default store 