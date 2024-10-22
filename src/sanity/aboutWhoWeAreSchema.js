import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutUsWhoWeAre',
  title: 'About Us -  Who We Are',
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
      name: 'whoWeAre',
      title: 'Who We Are',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'visionAndPurposeImage',
      title: 'Vision and Purpose Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for better image cropping
      },
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
      name: 'ourFocusParagraph1',
      title: 'Our Focus Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ourFocusParagraph2',
      title: 'Our Focus Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'multidisciplinaryImage',
      title: 'Multidisciplinary Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for better image cropping
      },
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
    
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
