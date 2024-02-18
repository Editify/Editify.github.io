import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import tailwind from "@astrojs/tailwind";
import fs from 'node:fs';
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';

const houstonFile = './expressivecode-themes/houston.jsonc';
const houston = fs.readFileSync(
  new URL(houstonFile, import.meta.url),'utf-8');
const houstonTheme = ExpressiveCodeTheme.fromJSONString(houston);

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Editify',
    plugins: [starlightBlog({
      authors: {
		eveeify: {
			name: 'Eveeify',
			title: 'Creator/Maintainer',
			picture: '/authors/eveeify.jpg',
			url: 'https://github.com/Eveeifyeve'
		},
        adam: {
          name: 'Adam M.',
          title: 'Web Maintainer',
          picture: '/authors/adam.jpg',
          url: 'https://github.com/adammatthiesen'
        }
      }
    })],
    components: {
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro'
    },
	expressiveCode: {
		themes: [ houstonTheme ],
	},
	customCss: [ './src/styles/tw.css' ],
    social: {
      github: 'https://github.com/Editify'
    },
    editLink: {
      baseUrl: 'https://github.com/Editify/Website/edit/main'
    },
    sidebar: [{
      label: 'Our Resources',
      items: [{
        label: 'The Downloads',
        link: '/downloads',
        badge: {
          text: 'Coming Soon',
          variant: 'caution'
        }
      }]
    }, {
      label: "Usage Guide",
      autogenerate: {
        directory: 'guide'
      }
    }, {
      label: 'Extensions',
      autogenerate: {
        directory: 'extensions'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind({
	applyBaseStyles: false,
  })]
});