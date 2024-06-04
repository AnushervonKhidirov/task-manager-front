export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type Request = {
    endpoint: string
    method?: Method
    body?: { [k: string]: FormDataEntryValue }
}

export default async function request({ endpoint, method, body }: Request): Promise<[any, any]> {
    try {
        const request = await fetch(endpoint, {
            method: method,
            body: JSON.stringify(body),
        })

        if (!request.ok) throw new Error('oh mth, something went wrong (')

        const response = await request.json()

        return [response, null]
    } catch (err) {
        return [null, err]
    }
}
