import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 0 10rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
