
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
      name: 'excerpt',
      type: 'string',
      title: 'excerpt'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'mainImage'
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'createdAt'
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        },
      ]
    }
  ]
}