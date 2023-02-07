import CartActionType from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT:
      // verificar se produto ta no carrinho

      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      // se estiver, aumentar quantidade em 1

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      // se não, adicioná-lo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionType.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case CartActionType.INC_PRODUCT_QTD:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case CartActionType.DEC_PRODUCT_QTD:

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ).filter(product => product.quantity > 0),
      };
    default:
      return state;
  }
};

export default cartReducer;
