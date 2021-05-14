/**
 * Please also see
 * - [[LimitedUser]]
 * - [[CurrentUser]]
 *
 * @packageDocumentation
 */

import { status } from '@/data/vrchatApi/Status'
import { state } from '@/data/vrchatApi/State'
import { developerType } from '@/data/vrchatApi/DevelopperType'
import { location } from '@/data/vrchatApi/Location'
import * as T from 'io-ts'

/**
 * Please see [[CurrentUser]].
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const user = T.type({
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
   * Bio of user
   */
  bio: T.string,

  /**
   * Array of URLs (strings) user has added to their account
   */
  bioLinks: T.array(T.string),

  /**
   * Not implemented yet (vrc+)
   */
  userIcon: T.string,

  /**
   * Current state of user, only returns if isFriend is true
   */
  state,

  /**
   * Current status of user, only returns if isFriend is true
   */
  status,

  /**
   * Custom status message of user
   */
  statusDescription: T.string,

  /**
   * Cover image of user's current avatar
   */
  currentAvatarImageUrl: T.string,

  /**
   * Small cover image of user's current avatar
   */
  currentAvatarThumbnailImageUrl: T.string,

  /**
   * Time and date user last logged in
   */
  last_login: T.string, // eslint-disable-line camelcase

  /**
   * Last platform of VRChat that user logged in from
   */
  last_platform: T.string, // eslint-disable-line camelcase

  /**
   * If user has allowed cloning of public avatars they are using
   */
  allowAvatarCopying: T.boolean,

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
   * Key that probably identifies you as their friend if you have it, or an empty string if isFriend is false
   */
  friendKey: T.string,

  /**
   * Type of instance user is in. Offline if user is offline or an empty string if isFriend is false
   */
  location,

  /**
   * World ID of world user is in, offline if user is offline or empty string if isFriend is false
   */
  worldId: T.string,

  /**
   * Instance location with no worldId (combination of instanceName, instanceType and nonce). Offline if user is offline or empty string if isFriend is false.
   */
  instanceId: location,
})

export type User = T.TypeOf<typeof user>
