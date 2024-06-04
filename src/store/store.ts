import { configureStore } from '@reduxjs/toolkit'

import menuReducer from './menu/slice'
import popUpReducer from './pop-up/slice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        popUp: popUpReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
