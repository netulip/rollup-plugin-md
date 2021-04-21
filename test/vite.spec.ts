import vite from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'

import plugin from '../src'

describe('basic functionality', () => {
	it('can compile md file', async () => {
		await vite.build({
			root: 'test/fixtures/vite',
			plugins: [plugin({ enforce: 'pre' }), svelte({ extensions: ['.svelte', '.md'] })],
			build: {
				minify: false
			}
		})
		expect(true).toBe(true)
	})
})
