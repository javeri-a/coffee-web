import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import detail from './detail'
import menu from './menu'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,detail,menu],
}
