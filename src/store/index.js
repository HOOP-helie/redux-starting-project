import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showBtn: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.counter++ },
        decrement: (state) => { state.counter-- },
        toggleBtn: (state) => {
            return !state.showBtn
        }
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


export const { increment, decrement, toggleBtn } = counterSlice.actions

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})

export default store 