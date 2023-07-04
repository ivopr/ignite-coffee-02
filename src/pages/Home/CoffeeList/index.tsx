import { CoffeeCard, CoffeeListContainer } from './styles'
import * as images from '../../../assets/cafes'

interface CoffeeOffer {
  title: string
  description: string
  price: number
  tags: string[]
  image: string
}

export function CoffeeList() {
  const offers: CoffeeOffer[] = [
    {
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: images.Expresso,
      price: 9.9,
      tags: ['Tradicional'],
    },
  ]

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      {offers.map((offer) => (
        <CoffeeCard key={offer.title}>
          <img src={offer.image} alt="" />
          <h1>{offer.title}</h1>
          <p>{offer.description}</p>
        </CoffeeCard>
      ))}
    </CoffeeListContainer>
  )
}
