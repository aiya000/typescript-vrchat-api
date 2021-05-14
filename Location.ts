import * as T from 'io-ts'

/**
 * [Location](https://vrchatapi.github.io/#/Objects/World?id=location)
 *
 * > Location is a string made up of possibly multiple parts. The first part is usually "worldId:instanceName" and sometimes just "instanceName". Other parts are joined using "~" as a separator
 *
 * @example
 * ```
 * // dummy
 * ```
 */
export const location = T.string

export type Location = T.TypeOf<typeof location>

export const locationValue = T.intersection([
  T.partial({ worldId: T.string }),
  T.type({ instanceName: T.string }),
])

export type LocationValue = T.TypeOf<typeof locationValue>

/**
 * Parses [[Location]].
 *
 * Returns null if it is failed.
 */
export function parseLocation(x: Location): LocationValue | null {
  const splitter = x.search(':')
  if (splitter === -1) {
    return { instanceName: x }
  }

  const worldId = x.substring(0, splitter)
  const instanceName = x.substring(splitter + 1)
  return { worldId, instanceName }
}
