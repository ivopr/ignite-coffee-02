import { CTA } from './CTA'
import { CoffeeList } from './CoffeeList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CTA />
      <CoffeeList />
    </HomeContainer>
  )
}
