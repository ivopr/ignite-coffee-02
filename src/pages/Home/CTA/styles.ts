import styled from 'styled-components'

export const CTAContainer = styled.div`
  display: flex;
  padding: 5.875rem 0;
  gap: 3.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }

  div:nth-child(2) {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
    row-gap: 1.25rem;

    span {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      line-height: 1.3;
    }
  }

  div:nth-child(1) {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 3rem;
      line-height: 1.3;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }
`

interface FeatureProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const FeatureIcon = styled.i<FeatureProps>`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.variant]};
  padding: 0.5rem;
`
