import * as T from 'io-ts'

/**
 * Please note this is incomplete!
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const feature = T.type({
  /**
   * Probably if user is able to enable TwoFactorAuth
   */
  twoFactorAuth: T.boolean,
})

export type Feature = T.TypeOf<typeof feature>
