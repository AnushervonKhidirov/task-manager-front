import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpened: false,
    },
    reducers: {
        open: state => {
            state.isOpened = true
        },
        close: state => {
            state.isOpened = false
        },
    },
})

export const { open, close } = menuSlice.actions
export default menuSlice.reducer
