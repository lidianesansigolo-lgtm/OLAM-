import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'OLAM — Maison de Haute Joaillerie' },
      {
        name: 'description',
        content:
          'An archive of objects in gold and precious stones. Guided by time, matter, and permanence.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous' as const,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,opsz,wght@0,14..40,300;0,14..40,400;0,14..40,500;1,14..40,300;1,14..40,400&family=Jost:wght@200;300;400;500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <div className="page-wrap">{children}</div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
