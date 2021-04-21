import type { Options } from './types'
import SvelteTransformer from './transformers/svelte'

export default (userOptions: Options = {}) => {
	return {
		name: 'rollup-plugin-md',
		enforce: userOptions.enforce,

		transform(source: string, id: string) {
			if (!id.endsWith('.md')) return
			return SvelteTransformer(source)
		}
	}
}
