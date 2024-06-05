import type { ErrorRequest } from '@type/error'
import type { RequestFunc } from '@type/request'

const request: RequestFunc = async ({ endpoint, method, body }) => {
    try {
        const request = await fetch(endpoint, {
            method: method,
            body: JSON.stringify(body),
        })

        if (!request.ok) {
            throw new Error('Something went wrong, pleas try again later', { cause: { statusCode: request.status } })
        }

        const response = await request.json()

        return [response, null]
    } catch (err: any) {
        const requestErr: ErrorRequest = {
            massage: err.message,
            statusCode: err.cause.statusCode,
        }
        return [null, err]
    }
}

export default request
