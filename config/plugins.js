module.exports = ({env}) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        modelName: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 10,
      maxLimit: 20,
      shadowCRUD: true,
      apolloServer: {
        tracing: true,
      },
    }
  },
})
