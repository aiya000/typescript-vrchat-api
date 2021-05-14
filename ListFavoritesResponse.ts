/**
 * @packageDocumentation
 * - [[ListFavoritesResponse]]
 */

import { typeOptions } from '@/data/vrchatApi/TypeOptions'
import * as T from 'io-ts'

export const listFavoritesResponseItem = T.type({
  /**
   * Favorite ID
   */
  id: T.string,

  /**
   * The type of the favorite
   */
  type: typeOptions,

  /**
   * The Object Id
   */
  favoriteId: T.string,

  /**
   * Is only 1 string value that is the name of the favorite group
   */
  tags: T.array(T.string),
})

export type ListFavoritesResponseItem = T.TypeOf<typeof listFavoritesResponseItem>

/**
 * The response of /favorites/.
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const listFavoritesResponse = T.array(listFavoritesResponseItem)

export type ListFavoritesResponse = T.TypeOf<typeof listFavoritesResponse>
