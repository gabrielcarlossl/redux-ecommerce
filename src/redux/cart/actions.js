import CartActionType from "./action-types";

export const addProductToCart = (payload) =>({
    type: CartActionType.ADD_PRODUCT,
    payload,
})
export const removeProductFromCart = (payload) =>({
    type: CartActionType.REMOVE_PRODUCT,
    payload
})
export const increaseProductQuantity = (payload) =>({
    type: CartActionType.INC_PRODUCT_QTD,
    payload
})
export const decreaseProductQuantity = (payload) =>({
    type: CartActionType.DEC_PRODUCT_QTD,
    payload
})