import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.blue};
  cursor: pointer;
  transition: 0.5s;
  border: none;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.white};
`
