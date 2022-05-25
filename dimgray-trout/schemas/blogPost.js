
export default {
  name: 'blog',
  type: 'document',
  title: 'blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title'
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'body',
      type: 'string',
      title: 'body'
    },
    {
      name: 'image',
      type: 'image',
      title: 'image'
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'createdAt'
    },
  ]
}