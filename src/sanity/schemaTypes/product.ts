
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Product Name',
        type: 'string',
      },
      
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  