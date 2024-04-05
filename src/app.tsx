// @refresh reload
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'

export default function App() {

  return (
    <Router
      root={properties => {
        return (
            <MetaProvider>
              <Title>SolidStart - with Civet</Title>
              <Suspense>{properties.children}</Suspense>
            </MetaProvider>
        )
      }}
    >
      <FileRoutes />
    </Router>
  )
}
