import { useConfigStore } from '../stores/config';
import { defu } from 'defu';
import type { NitroFetchOptions } from 'nitropack';

export function useCustomFetch<T extends string, K>(
	url: string,
	options: NitroFetchOptions<T> = {}
) {
	const configStore = useConfigStore()
  const config = useRuntimeConfig()
	const defaults: NitroFetchOptions<T> = {
		baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
		headers: {
			'Content-type': 'application/json',
			Authorization: 'Bearer ' + configStore.env.apiKey,
		},
		query: {
			populate: '*'
		}
	}
	const params = defu(options, defaults)

	return $fetch<K>(url, params)
}