import { Rule } from "sanity";

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule:Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule:Rule) => Rule.required().min(0),
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
          hotspot: true, // Allows selecting the focal point of the image
        },
        validation: (Rule:Rule) => Rule.required(),
      },
    ],
  };
  