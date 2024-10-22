import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesSchoolDevelopment',
  title: 'Services - School Development',
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
      name: 'whereToBegin',
      title: 'Where to Begin',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewProcessHeading',
      title: 'Review Process Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewProcess',
      title: 'Review Process',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'developmentPrioritiesHeading',
      title: 'Development Priorities Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'developmentPriorities',
      title: 'Development Priorities',
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
