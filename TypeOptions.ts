import * as T from 'io-ts'

/**
 * @example
 * ```
 * // dummy
 * ```
 */
export const typeOptions = T.union([T.literal('world'), T.literal('friend'), T.literal('avatar')])

export type TypeOptions = T.TypeOf<typeof typeOptions>
