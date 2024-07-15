export type ErrorCustom = {
    massage: string
}

export type ErrorRequest = ErrorCustom & {
    statusCode: number | null
}
