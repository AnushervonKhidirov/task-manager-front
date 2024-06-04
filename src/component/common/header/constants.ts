import type { Input } from '@common/form/form'

export const logInInputs: Input[] = [
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
    },
]

export const signInInputs: Input[] = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Name',
        required: true,
    },
    {
        name: 'surname',
        type: 'text',
        placeholder: 'Surname',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
    },
    {
        name: 'repeat_password',
        type: 'password',
        placeholder: 'Repeat password',
        required: true,
    },
]
