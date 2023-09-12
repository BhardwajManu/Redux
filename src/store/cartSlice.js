const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({


    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);

        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);

        },
        inc(state, action) {
            let product = state.find(item => item.id === action.payload);
            if (product) {
                product.qty += 1;
            }
            return state;
        },

        dec(state, action) {
            let product = state.find(item => item.id === action.payload);
            if (product && product.qty > 1) {
                product.qty -= 1;
            }
            return state;
        },


    },
})

export const { add, remove, inc, dec } = cartSlice.actions;
export default cartSlice.reducer;
