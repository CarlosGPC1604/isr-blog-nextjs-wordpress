const { ApolloServer, gql } = require('apollo-server');

// Definición del esquema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolvers para las consultas del esquema
const resolvers = {
    Query: {
        hello: () => '¡Hola, mundo!',
    },
};

// Crear el servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen().then(({ url }) => {
    console.log(`🚀 Servidor listo en ${url}`);
});
