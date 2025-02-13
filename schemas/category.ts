export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          { title: 'Portraits', value: 'portraits' },
          { title: 'Cars', value: 'cars' },
          { title: 'Architecture', value: 'architecture' },
          { title: 'Motorbikes', value: 'motorbikes' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
};