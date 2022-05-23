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
    }
  ]
}