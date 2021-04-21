require('dotenv').config()

module.exports = {
  hooks: {
    afterAllFileWrite: ['eslint src --fix'],
  },
  schema: [
    {
      [process.env.REACT_APP_GRAPHQL_API]: {
        headers: {
          // This way you can include the bearer prefix or not
          Authorization: 'Bearer ' + process.env.TOKEN.replace(/Bearer /, ''),
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        skipTypeNameForRoot: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withMutationFn: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
