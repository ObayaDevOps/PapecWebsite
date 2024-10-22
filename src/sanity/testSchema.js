import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'test',
  title: 'Test',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tester',
      title: 'Tester',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
