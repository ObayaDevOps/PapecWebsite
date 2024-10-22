import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutWhyChooseUs',
  title: 'About - Why Choose Us',
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
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'text',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'consultancyHeading',
      title: 'Consultancy Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultancyExperienceBase',
      title: 'Consultancy Experience Base',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image4',
      title: 'Image 4',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specialisms',
      title: 'Specialisms',
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
