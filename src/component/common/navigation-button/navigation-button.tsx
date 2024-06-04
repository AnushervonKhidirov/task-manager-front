import { useAppDispatch, useAppSelector } from '@hook/store'
import { open, close } from '@store/menu/slice'

const NavigationButton = () => {
    const state = useAppSelector(state => state.menu)
    const dispatch = useAppDispatch()

    function toggleMenuHandler() {
        const handler = state.isOpened ? close : open
        dispatch(handler())
    }

    return (
        <button className={state.isOpened ? 'active' : ''} onClick={toggleMenuHandler}>
            button
        </button>
    )
}

export default NavigationButton
