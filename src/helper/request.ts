import type { ErrorRequest } from '@type/error'
import type { RequestFunc } from '@type/request'

const request: RequestFunc = async ({ endpoint, method, body }) => {
    try {
        const request = await fetch(endpoint, {
            method: method,
            body: JSON.stringify(body),
        })

        if (!request || !request.ok) {
            throw new Error('Something went wrong, pleas try again later', { cause: { statusCode: request.status } })
        }

        const response = await request.json()

        return [response, null]
    } catch (err: any) {
        const statusCode = err.cause && err.cause.statusCode ? err.cause.statusCode : null

        const requestErr: ErrorRequest = {
            massage: err.message,
            statusCode: statusCode,
        }

        console.log(requestErr)
        
        return [null, requestErr]
    }
}

export default request
