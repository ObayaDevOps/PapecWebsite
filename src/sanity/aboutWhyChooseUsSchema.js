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
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highAchievingOrganizations',
      title: 'High Achieving Organizations',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ourApproach',
      title: 'Our Approach',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultancySupport',
      title: 'Consultancy Support',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'consultancyExperienceBase',
      title: 'Consultancy Experience Base',
      type: 'text',
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
