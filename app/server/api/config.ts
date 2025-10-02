export default defineEventHandler(() => {
	const config = useRuntimeConfig()
	return {
			apiKey: config.apiKey,
	}
})
