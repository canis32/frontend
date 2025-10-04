import type { NitroFetchOptions } from 'nitropack'
import type { CollectionsResponse } from "../types/app"
export const useLoadData = async <T extends string, K>(path: string, options: NitroFetchOptions<T> = {}) => {

  const { data } = await useAsyncData<CollectionsResponse<K>>(path, () =>
    useCustomFetch<T, CollectionsResponse<K>>(path, options)
  )

  return data
}