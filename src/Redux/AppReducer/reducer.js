import * as types from "./actionTypes";
const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_CARTDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_CARTDATA_SUCCESS:
      return {
        ...state,
        cart: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_CARTDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_CARTDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_CARTDATA_SUCCESS: {
      let newCart = [...state.cart, payload];
      return {
        ...state,
        cart: newCart,
        isLoading: false,
        isError: false,
      };
    }
    case types.ADD_CARTDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_CARTDATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.UPDATE_CARTDATA_SUCCESS: {
      let newcart = state.cart.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        cart: newcart,
        isLoading: false,
        isError: false,
      };
    }
    case types.UPDATE_CARTDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DELETE_CARTITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_CARTITEM_SUCCESS:
      return {
        ...state,
        cart: [],
        isLoading: false,
        isError: false,
      };
    case types.DELETE_CARTITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export { reducer };
