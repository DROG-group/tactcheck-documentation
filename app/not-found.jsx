import { NotFoundPage } from 'nextra-theme-docs'

export default function NotFound() {
  return (
    <NotFoundPage content="Submit an issue about broken link">
      <h1>Oops! Page Not Found</h1>
      <p>
        It looks like the page you are trying to access doesn&apos;t exist.
      </p>
      <p>
        Feel free to explore other sections of our documentation or go back
        to the <a href="/">homepage</a>.
      </p>
    </NotFoundPage>
  )
}
