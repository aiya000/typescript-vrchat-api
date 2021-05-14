import * as T from 'io-ts'

/**
 * [Status](https://vrchatapi.github.io/#/Objects/User?id=status)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const status = T.union([
  /**
   * User can see requests
   */
  T.literal('active'),

  /**
   * User auto-accepts requests
   */
  T.literal('join me'),

  /**
   * People can't see user's location, but they can see requests
   */
  T.literal('ask me'),

  /**
   * User auto-declines requests
   */
  T.literal('busy'),

  /**
   * User is offline
   */
  T.literal('offline'),
])

export type Status = T.TypeOf<typeof status>

export function isStatus(x: unknown): x is Status {
  return x === 'active' || x === 'join me' || x === 'ask me' || x === 'busy' || x === 'offline'
}
