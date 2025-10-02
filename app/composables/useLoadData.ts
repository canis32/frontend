import type { NitroFetchOptions } from 'nitropack'
import type { CollectionsResponse } from "../types/app"
export const useLoadData = async <T extends string>(path: string, options: NitroFetchOptions<T> = {}) => {
  const { data } = await useAsyncData<CollectionsResponse<T>>(path, () =>
    useCustomFetch<T, CollectionsResponse<T>>(path, options)
  )
  return data
}
