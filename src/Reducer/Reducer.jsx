const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "Add_To_Cart":

            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        // ...state, carts: [...state.cart, action.payload]
        // const itemindex = state.carts.findIndex((items) => items.id === action.payload.id);
        // if (itemindex >= 0) {
        //     state.carts[itemindex].qnty += 1
        // }
        // else {
        //     const temp = { ...action.payload, qnty: 1 }
        //     return {
        //         ...state,
        //         carts: [...state.carts, temp]

        //     }
        // return {
        //     // ...state,
        //     // carts: [...state.carts, action.payload]
        //     // ...state, carts: [...state.cart, action.payload]
        // }
        // }
        default:
            return state

    }

}

// const initialState = {
//     carts: []
// }

// export const cartreducer = (state = initialState, action) => {
//     switch (action.type) {

//         case "Add_To_Cart":
//             return { ...state, carts: [...state.carts, action.payload] }

//         default:
//             return state
//     }
// }
