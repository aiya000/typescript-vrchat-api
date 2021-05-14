/**
 * Please also see
 * - [[User]]
 * - [[CurrentUser]]
 */

import { status } from '@/data/vrchatApi/Status'
import { developerType } from '@/data/vrchatApi/DevelopperType'
import { location } from '@/data/vrchatApi/Location'
import * as T from 'io-ts'

/**
 * [Limited User object(https://vrchatapi.github.io/#/Objects/User?id=limited-user-object)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const limitedUser = T.type({
  /**
   * Users username (displayName, but lowercase)
   */
  username: T.string,

  /**
   * Users display name
   */
  displayName: T.string,

  /**
   * User ID of user (Usually prefixed by "usr", except in some rare cases)
   */
  id: T.string,

  /**
   * Bio of user, set on the VRChat website
   */
  bio: T.string,

  /**
   * Current status of user, only returns if isFriend is true
   */
  status,

  /**
   * Cover image of user's current avatar
   */
  currentAvatarImageUrl: T.string,

  /**
   * Small cover image of user's current avatar
   */
  currentAvatarThumbnailImageUrl: T.string,

  /**
   * Last platform of VRChat that user logged in from
   */
  last_platform: T.string, // eslint-disable-line camelcase

  /**
   * Array of strings, defining certain settings and accessibility user has
   */
  tags: T.array(T.string),

  /**
   * Type of developer user is
   */
  developerType,

  /**
   * If the user is a friend of current user (who got this object in response)
   */
  isFriend: T.boolean,

  /**
   * Type of instance user is in. Offline if user is offline or an empty string if isFriend is false
   */
  location,
})

export type LimitedUser = T.TypeOf<typeof limitedUser>
