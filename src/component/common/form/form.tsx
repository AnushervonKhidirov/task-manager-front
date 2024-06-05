import type { FC, FormEvent, HTMLInputTypeAttribute } from 'react'

import Button from '../button/button'

import getClassNames from '@helper/multiple-classes'
import styles from './form.module.css'

export type Input = {
    name: string
    type: HTMLInputTypeAttribute
    placeholder: string
    required?: boolean
}

type Form = {
    inputs: Input[]
    submitFunc: (event: FormEvent) => void
    submitBtnText?: string
    extraClass?: string
}

const Form: FC<Form> = ({ inputs, submitFunc, submitBtnText, extraClass = '' }) => {
    return (
        <form onSubmit={submitFunc} className={getClassNames({ classes: [styles.form, extraClass] })}>
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
