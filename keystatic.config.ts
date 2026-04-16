import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'oriolss1996',
      name: 'astro-blog-starter-template',
    },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.string({ label: 'Título' }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});