import { RouteSectionProps } from '@solidjs/router'
import Test from '~/components/Test.civet'

export default function HomeLayout(properties: RouteSectionProps) {
  return (
    <main>
      <Test />
      <section>{properties.children}</section>
    </main>
  )
}