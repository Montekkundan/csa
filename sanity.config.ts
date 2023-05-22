/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\sanity\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {theme} from 'https://themer.sanity.build/api/hues?default=9a8bbd&primary=9e80f4&transparent=9b8dbb&positive=43d675;300&caution=fbd024;200&lightest=fcfcfd&darkest=0f0d15'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import { getDefaultDocumentNode } from './structure'

export default defineConfig({
  
  basePath: '/sanity',
  name: 'CSA_UFV_Studio',
  title: 'CSA UFV Studio',
  theme,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
