import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actions';

const initialState = {
    items: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const updatedCart = [...state.items];
                updatedCart[existingItemIndex].quantity += 1;
                return {
                    ...state,
                    items: updatedCart
                };
            }else {
                return {
                    ...state,
                    items:  [...state.items, {...action.payload, quantity: 1} ],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case INCREASE_QUANTITY:
            const ItemIndex = state.items.findIndex(item => item.id === action.payload);
            const updatedIncreaseCart = [...state.items];
            updatedIncreaseCart[ItemIndex].quantity += 1;
            return {
                ...state,
                items: updatedIncreaseCart
            };
        case DECREASE_QUANTITY:
            const ItemDecIndex = state.items.findIndex(item => item.id === action.payload);
            const updatedDecreaseCart = [...state.items];
            if (updatedDecreaseCart[ItemDecIndex].quantity > 1) {
                updatedDecreaseCart[ItemDecIndex].quantity -= 1;
                return {
                    ...state,
                    items: updatedDecreaseCart
                };
            } else{
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload),
                };
            }
        default:
            return state;
    }
};
