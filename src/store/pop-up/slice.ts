import { createSlice } from '@reduxjs/toolkit'

export const popUpSlice = createSlice({
    name: 'pop-up',
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

export const { open, close } = popUpSlice.actions
export default popUpSlice.reducer
