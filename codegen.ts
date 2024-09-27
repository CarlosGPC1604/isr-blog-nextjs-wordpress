import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Definir la URL del esquema
const schemaUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
  ? `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`
  : "http://localhost:3000/graphql";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [schemaUrl]: {
      headers: {
        "User-Agent": "Codegen",
      },
    },
  },
  documents: "src/queries/general/**/*.graphql", // Añadir la ruta a los documentos de GraphQL si los tienes
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
