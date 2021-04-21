import Marked from 'marked'
import GrayMatter from 'gray-matter'

export default function (source: string): string {
	const { data, content } = GrayMatter(source)
	let head = `<svelte:head>`
	if (data.title) {
		head += `
        <title>${data.title}</title>
        <meta property="og:title" content=${data.title} />
        <meta property="twitter:title" content=${data.title} />
        `
	}

	if (data.image) {
		head += `
        <meta property="og:image" content=${data.image} />
        <meta property="twitter:image" content=${data.image} />
        `
	}

	if (data.description) {
		head += `
        <meta name="description" content=${data.description} />
        <meta property="og:description" content=${data.description} />
        <meta property="twitter:description" content=${data.description} />
        `
	}

	if (data.author) {
		head += `<meta name="author" content="${data.author}" />`
	}

	if (data.twitter) {
		head += `<meta name="twitter:creator" content=${data.twitter} />`
	}

	head += `
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    `

	head += `</svelte:head>`

	return head + Marked(content)
}
