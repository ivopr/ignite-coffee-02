import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding: 2rem 0;

  & > h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  height: 310px;
  width: 256px;
  padding: 20px;

  border-radius: 6px 36px 6px 36px;

  img {
    transform: translateY(-2.5rem);
    height: 120px;
    width: 120px;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`
