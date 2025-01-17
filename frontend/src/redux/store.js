import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import MuiscsApi from './features/musics/muiscsApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [MuiscsApi.reducerPath]: MuiscsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MuiscsApi.middleware, ordersApi.middleware),
})