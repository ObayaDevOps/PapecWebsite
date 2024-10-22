import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutUsWhoWeAre',
  title: 'About Us Who We Are',
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
      name: 'whoWeAre',
      title: 'Who We Are',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ourFocus',
      title: 'Our Focus',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultantExpertise',
      title: 'Consultant Expertise',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solutions',
      title: 'Multidisciplinary Solutions',
      type: 'array',
      of: [{ type: 'string' }],
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
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
