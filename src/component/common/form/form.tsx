import type { FC, FormEvent, HTMLInputTypeAttribute } from 'react'
import type { Method } from '@helper/request'

import Button from '../button/button'

import multipleClasses from '@helper/multiple-classes'
import request from '@helper/request'
import styles from './form.module.css'

export type Input = {
    name: string
    type: HTMLInputTypeAttribute
    placeholder: string
    required?: boolean
}

type Form = {
    inputs: Input[]
    endpoint: string
    method?: Method
    submitBtnText?: string
    extraClass?: string
}

const Form: FC<Form> = ({ inputs, endpoint, method, submitBtnText, extraClass = '' }) => {
    async function submitForm(e: FormEvent) {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const body = Object.fromEntries(new FormData(form))

        const [response, requestErr] = await request({ endpoint: endpoint, method: method, body: body })

        if (requestErr) {
            alert('something went wrong, go away mtf!')
        } else {
            alert('data sent successful')
            console.log(response)
        }
    }

    return (
        <form onSubmit={submitForm} className={multipleClasses({ classes: [styles.form, extraClass] })}>
            {inputs.map(input => {
                return (
                    <input
                        className={styles.input}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                        key={input.name}
                    />
                )
            })}
            <Button buttonTheme='dark' type='submit'>
                {submitBtnText ? submitBtnText : 'Submit'}
            </Button>
        </form>
    )
}

export default Form
