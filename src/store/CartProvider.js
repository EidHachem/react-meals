import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item })
  }

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
