/**
 * Please also see
 * - [[LimitedUser]]
 * - [[User]]
 */

import { pastDisplayName } from '@/data/vrchatApi/PastDisplayName'
import { state } from '@/data/vrchatApi/State'
import { status } from '@/data/vrchatApi/Status'
import { feature } from '@/data/vrchatApi/Feature'
import { developerType } from '@/data/vrchatApi/DevelopperType'
import { SerializableAsCookie } from '@/data/SerializableAsCookie'
import { prettyError } from '@/data/string'
import Cookie, { CookieSetOptions } from 'universal-cookie'
import * as T from 'io-ts'

/**
 * [Current User object](https://vrchatapi.github.io/#/Objects/User?id=current-user-object)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const currentUser = T.type({
  /**
   * Users username (displayName, but lowercase)
   */
  username: T.string,

  /**
   * Users display name
   */
  displayName: T.string,

  /**
   * Array of PastDisplayName objects
   */
  pastDisplayNames: T.array(pastDisplayName),

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
   * User email, empty if none
   */
  email: T.string,

  /**
   * If user has verified their email
   */
  emailVerified: T.boolean,

  /**
   * If user has an email
   */
  hasEmail: T.boolean,

  /**
   * If user has an email but hasn't verified it
   */
  hasPendingEmail: T.boolean,

  /**
   * User email but obfuscated, empty if none
   */
  obfuscatedEmail: T.string,

  /**
   * Pending user email but obfuscated, empty if none
   */
  obfuscatedPendingEmail: T.string,

  /**
   * User steamId (Don't know which one), empty if using VRChat account
   */
  steamId: T.string,

  /**
   * Steam details of user, empty if using VRChat account
   */
  steamDetails: T.unknown, // TODO: What is this elements type

  /**
   * User oculusId, empty if none
   */
  oculusId: T.string,

  /**
   * Version of the VRChat Terms-Of-Service user has accepted
   */
  acceptedTOSVersion: T.number,

  /**
   * If user has a birthday set
   */
  hasBirthday: T.boolean,

  /**
   * Array of friend User IDs
   */
  friends: T.array(T.string),

  /**
   * Array of online friend User IDs
   */
  onlineFriends: T.array(T.string),

  /**
   * Array of active friend User IDs
   */
  activeFriends: T.array(T.string),

  /**
   * Array of offline friend User IDs
   */
  offlineFriends: T.array(T.string),

  /**
   * Array of names (strings) of groups user has made
   */
  friendGroupNames: T.array(T.string),

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
   * Avatar ID of current avatar
   */
  currentAvatar: T.string,

  /**
   * Url to bundled avatar file (.vrca)
   */
  currentAvatarAssetUrl: T.string,

  /**
   * Cover image of user's current avatar
   */
  currentAvatarImageUrl: T.string,

  /**
   * Small cover image of user's current avatar
   */
  currentAvatarThumbnailImageUrl: T.string,

  /**
   * World ID of users home world
   */
  homeLocation: T.string,

  /**
   * Time and date user last logged in
   */
  last_login: T.string, // eslint-disable-line camelcase

  /**
   * Last platform of VRChat that user logged in from
   */
  last_platform: T.string, // eslint-disable-line camelcase

  /**
   * If user has logged in via the VRChat client
   */
  hasLoggedInFromClient: T.boolean,

  /**
   * If user has TwoFactorAuth enabled
   */
  twoFactorAuthEnabled: T.boolean,

  /**
   * If user has allowed cloning of public avatars they are using
   */
  allowAvatarCopying: T.boolean,

  /**
   * Either date and time account will be deleted or date and time account was deleted. Returns null type when none
   */
  accountDeletionDate: T.union([T.string, T.null]),

  /**
   * If user has unsubscribed from VRChat general emails
   */
  unsubscribe: T.boolean,

  /**
   * Array of strings, defining certain settings and accessibility user has
   */
  tags: T.array(T.string),

  /**
   * Probably current 'features' and if the user has access to them
   */
  feature,

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

  date_joined: T.string,
  fallbackAvatar: T.string,
  userIcon: T.string,
})

export type CurrentUser = T.TypeOf<typeof currentUser>

export const serializableAsCookie: SerializableAsCookie<CurrentUser> = {
  saveToCookie,
  getFromCookie,
  removeFromCookie,
}

/**
 * @hidden
 */
export const cookieTag = 'nyan-dog'

/**
 * @hidden
 * @example
 * ```
 * ```
 */
export function saveToCookie(cookie: Cookie, value: CurrentUser, options?: CookieSetOptions): void {
  cookie.set(cookieTag, value, options)
}

function getFromCookie(cookie: Cookie): CurrentUser | null {
  const x: unknown = cookie.get(cookieTag)
  if (x === undefined) {
    return null
  }

  if (!currentUser.is(x)) {
    throw new Error(`Illegal condition. Is not a CurrentUser: ${prettyError(x)}`)
  }

  return x
}

function removeFromCookie(cookie: Cookie): void {
  cookie.remove(cookieTag)
}
