import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "977akrgx",
  dataset: "production",
  title: "Keezy Studio",
  apiVersion: "2023-04-17",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
