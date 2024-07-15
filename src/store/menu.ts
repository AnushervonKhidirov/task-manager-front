import { create } from 'zustand'

type TMenuStore = {
    isOpened: boolean
    open: () => void
    close: () => void
}

export const useMenuStore = create<TMenuStore>(set => ({
    isOpened: false,
    open: () => set(() => ({ isOpened: true })),
    close: () => set(() => ({ isOpened: false })),
}))
