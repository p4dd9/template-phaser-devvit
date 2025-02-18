import { writeFileSync } from 'fs'
import { Plugin } from 'vite'

const version = Date.now()

export const webrootHtmlPlugin: Plugin = {
	name: 'webroot-html-plugin',
	enforce: 'post',
	transformIndexHtml(_html, _ctx) {
		return [
			{
				tag: 'script',
				children: `window.webrootVersion = '${version}';`,
				injectTo: 'head-prepend',
			},
		]
	},
	generateBundle(_options, bundle) {
		const indexFile = bundle['index.html']

		indexFile.fileName = `index.${version}.html`
		writeFileSync('./webroot.json', JSON.stringify({ version }, null, 2))
	},
}
