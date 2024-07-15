import type { FormEvent } from 'react'

import { usePopUpStore } from '@store/pop-up'

import NavigationButton from '@common/navigation-button/navigation-button'
import Button from '@common/button/button'
import PopUp from '@common/pop-up/pup-up'
import Form from '@common/form/form'

import request from '@helper/request'

import { SIGN_IN_ENDPOINT } from '@constant/endpoints'
import { signInInputs } from './constants'
import styles from './header.module.css'

type SignInResponse = {
    id: number
}

const Header = () => {
    const { isOpened, open } = usePopUpStore(state => state)

    function openPopUp() {
        open()
    }

    const submitForm = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const body = Object.fromEntries(new FormData(form))

        const [response, requestErr] = await request<SignInResponse>({
            endpoint: SIGN_IN_ENDPOINT,
            method: 'POST',
            body: body,
        })

        if (requestErr) {
            alert(requestErr.massage)
        } else {
            alert('data sent successful')
            console.log(response.id)
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

            {isOpened && (
                <PopUp>
                    <Form submitFunc={submitForm} inputs={signInInputs}></Form>
                </PopUp>
            )}
        </>
    )
}

export default Header
