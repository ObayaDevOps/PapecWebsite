import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutUsConsultantProfiles',
  title: 'About Us - Consultant Profiles',
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
      name: 'heading',
      title: 'Heading',
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
      name: 'consultants',
      title: 'Consultants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'bio', title: 'Biography', type: 'text' },
            { name: 'image', title: 'Image', type: 'image' },
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
