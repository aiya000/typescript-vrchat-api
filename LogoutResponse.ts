import * as T from 'io-ts'

export const logoutFailureResponse = T.type({
  error: T.string,
  status_code: T.number,
})

export type LogoutFailureResponse = T.TypeOf<typeof logoutFailureResponse>

export const logoutSuccessResponse = T.type({
  success: T.type({
    message: T.string,
    status_code: T.number,
  }),
})

export type LogoutSuccessResponse = T.TypeOf<typeof logoutSuccessResponse>

export const logoutResponse = T.union([logoutFailureResponse, logoutSuccessResponse])

export type LogoutResponse = T.TypeOf<typeof logoutResponse>
