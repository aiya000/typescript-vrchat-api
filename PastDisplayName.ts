import * as T from 'io-ts'

/**
 * [PastDisplayName](https://vrchatapi.github.io/#/Objects/User?id=pastdisplayname)
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const pastDisplayName = T.type({
  /**
   * Old user displayName
   */
  displayName: T.string,

  /**
   * Date and time displayName was changed from this
   */
  updated_at: T.string,
})

export type PastDisplayName = T.TypeOf<typeof pastDisplayName>
