import type { FormEvent } from 'react'

import { useAppSelector, useAppDispatch } from '@hook/store'
import { open } from '@store/pop-up/slice'

import NavigationButton from '@common/navigation-button/navigation-button'
import Button from '@common/button/button'
import PopUp from '@common/pop-up/pup-up'
import Form from '@common/form/form'

import request from '@helper/request'

import { SIGN_IN_ENDPOINT } from '@constant/endpoints'
import { signInInputs } from './constants'
import styles from './header.module.css'

const Header = () => {
    const state = useAppSelector(state => state.popUp)
    const dispatch = useAppDispatch()

    function openPopUp() {
        dispatch(open())
    }

    const submitForm = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const body = Object.fromEntries(new FormData(form))

        const [response, requestErr] = await request<{ name: string }>({
            endpoint: SIGN_IN_ENDPOINT,
            method: 'POST',
            body: body,
        })

        if (requestErr) {
            alert(`${requestErr.massage}, status code: ${requestErr.statusCode}`)
        } else {
            alert('data sent successful')
            console.log(response.name)
        }
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
                    <Form submitFunc={submitForm} inputs={signInInputs}></Form>
                </PopUp>
            )}
        </>
    )
}

export default Header
