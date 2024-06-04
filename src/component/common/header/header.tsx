import { useAppSelector, useAppDispatch } from '@hook/store'
import { open } from '@store/pop-up/slice'

import NavigationButton from '@common/navigation-button/navigation-button'
import Button from '@common/button/button'
import PopUp from '@common/pop-up/pup-up'
import Form from '@common/form/form'

import { signInInputs } from './constants'
import styles from './header.module.css'

const Header = () => {
    const state = useAppSelector(state => state.popUp)
    const dispatch = useAppDispatch()

    function openPopUp() {
        dispatch(open())
    }

    return (
        <>
            <header>
                <NavigationButton />
                <Button buttonTheme='light' extraClass={styles.button} func={openPopUp}>
                    Log in
                </Button>
            </header>

            {state.isOpened && (
                <PopUp>
                    <Form endpoint='https://jsonplaceholder.typicode.com/posts' method='POST' inputs={signInInputs}></Form>
                </PopUp>
            )}
        </>
    )
}

export default Header
