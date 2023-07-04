import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.5rem;

    span {
      height: 3rem;
      border-radius: 8px;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.5rem;
      gap: 0.25rem;

      cursor: pointer;

      box-shadow: none;

      transition: all 0.25s;
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      &:hover {
        opacity: 0.7;
      }
    }

    a {
      width: 3rem;
      height: 3rem;

      border-radius: 8px;

      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;

      transition: all 0.25s;

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        opacity: 0.7;
      }
    }
  }
`
