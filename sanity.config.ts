import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'seventyseven-photography',
  title: 'SeventySeven Photography',
  projectId: 'tndmjdps',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
});