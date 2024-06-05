import type { ErrorRequest } from '@type/error'


export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type Request = {
    endpoint: string
    method?: Method
    body?: { [k: string]: FormDataEntryValue }
}

export type RequestFunc = <T>({ endpoint, method, body }: Request) => Promise<[null, ErrorRequest] | [T, null]>
