import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'courses',
  title: 'Professional Development Courses',
  icon: PackageIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatWeOffer',
      title: 'What We Offer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'areasOfTraining',
      title: 'Areas of Training',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
