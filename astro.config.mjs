import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Editify Docs',
			plugins: [
				starlightBlog({
					title: 'Editify Posts',
					authors: {
						adam: {
							name: 'Adam M.',
							title: 'Web Maintainer',
							picture: '/authors/adam.jpg',
							url: 'https://github.com/adammatthiesen'
						},
					},
				}),
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: {
				github: 'https://github.com/Editify',
			},
			editLink: {
				baseUrl: 'https://github.com/Editify/Website/edit/main'
			},
			sidebar: [
				{
					label: 'Our Resources',
					items: [
						{
							label: 'The Blog',
							link: '/blog',
						},
						{
							label: 'The Downloads',
							link: '/downloads',
							badge: {
								text: 'Coming Soon',
								variant: 'caution',
							}
						},
					],
				},
				{
					label: "Usage Guide",
					autogenerate: { directory: 'guide' },
				},
				{
					label: 'Extensions',
					autogenerate: { directory: 'extensions' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
