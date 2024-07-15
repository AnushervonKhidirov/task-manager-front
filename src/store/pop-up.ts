import { create } from 'zustand'

type TPopUpStore = {
    isOpened: boolean
    open: () => void
    close: () => void
}

export const usePopUpStore = create<TPopUpStore>(set => ({
    isOpened: false,
    open: () => set(() => ({ isOpened: true })),
    close: () => set(() => ({ isOpened: false })),
}))
