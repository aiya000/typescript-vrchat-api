import * as T from 'io-ts'

/**
 * [State](https://vrchatapi.github.io/#/Objects/User?id=state)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const state = T.union([
  /**
   * User is online in VRChat
   */
  T.literal('online'),

  /**
   * User is online, but not in VRChat
   */
  T.literal('active'),

  /**
   * User is offline
   */
  T.literal('offline'),
])

export type State = T.TypeOf<typeof state>
