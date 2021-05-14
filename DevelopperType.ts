import * as T from 'io-ts'

/**
 * [DeveloperType](https://vrchatapi.github.io/#/Objects/User?id=developertype)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const developerType = T.union([
  /**
   * User is not a developer
   */
  T.literal('none'),

  /**
   * Unknown
   */
  T.literal('trusted'),

  /**
   * Is a VRChat developer
   */
  T.literal('internal'),

  /**
   * Is a VRChat moderator
   */
  T.literal('moderator'),
])

export type DeveloperType = T.TypeOf<typeof developerType>
