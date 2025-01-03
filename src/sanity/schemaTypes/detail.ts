import { Rule } from "sanity";

export default {
    name: 'productDetail',
    title: 'Product Detail',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Product Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Rating value from 1 to 5',
        validation: (Rule:Rule) => Rule.min(1).max(5),
      },
    ],
  };
  