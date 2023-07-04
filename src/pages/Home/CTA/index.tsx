import { CTAContainer, FeatureIcon } from './styles'
import ctaImage from '../../../assets/cta-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function CTA() {
  return (
    <CTAContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>

        <div>
          <span>
            <FeatureIcon variant="yellow-dark">
              <ShoppingCart weight="fill" />
            </FeatureIcon>
            Compra simples e segura
          </span>
          <span>
            <FeatureIcon variant="yellow">
              <Timer weight="fill" />
            </FeatureIcon>
            Entrega rápida e rastreada
          </span>
          <span>
            <FeatureIcon variant="base-text">
              <Package weight="fill" />
            </FeatureIcon>
            Embalagem mantém o café intacto
          </span>
          <span>
            <FeatureIcon variant="purple">
              <Coffee weight="fill" />
            </FeatureIcon>
            O café chega fresquinho até você
          </span>
        </div>
      </div>

      <img src={ctaImage} alt="" />
    </CTAContainer>
  )
}
