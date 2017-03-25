import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import schemaModel from '../../plugins/schema/db/schema.db';

const schemaType = new GraphQLObjectType({
  name: 'Schema',
  description: 'A schema definition.',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'ID of the schema'
    },
    name: {
      type: GraphQLString,
      description: 'Machine name of the schema'
    },
    label: {
      type: GraphQLString,
      description: 'Human-readable name of the schema'
    },
    form_schema: {
      type: GraphQLString,
      description: 'Defines the import form',
      // TODO: move to a custom Type.
      resolve: schema => JSON.stringify(schema.get('form_schema'))
    },
    ui_schema: {
      type: GraphQLString,
      description: 'Defines the display of the schema',
      // TODO: move to a custom Type.
      resolve: schema => JSON.stringify(schema.get('ui_schema'))
    },
    createdAt: {
      type: GraphQLString,
      description: 'Date of create'
    },
    updatedAt: {
      type: GraphQLString,
      description: 'Date of update'
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    schemas: {
      type: new GraphQLList(schemaType),
      resolve: () => schemaModel.findAll()
    },
    schema: {
      type: schemaType,
      args: {
        name: {
          description: 'Machine-name of the schema',
          type: GraphQLString
        }
      },
      resolve: (root, where) => schemaModel.findAll({ where }).then(schemas => schemas.shift())
    }
  }
});

const EditorSchema = new GraphQLSchema({
  query: queryType
});

export default EditorSchema;
