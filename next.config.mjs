import { fileURLToPath } from 'node:url'
import nextra from 'nextra'

const withNextra = nextra({
  // Nextra 4 config options go here.
  // See https://nextra.site/docs/guide/organize-files for more info.
})

export default withNextra({
  reactStrictMode: true,
  // Pin the workspace root to this project so Next.js doesn't get confused
  // by an unrelated lockfile that may exist in a parent directory.
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url))
})
