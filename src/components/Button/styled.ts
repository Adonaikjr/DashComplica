import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.base_button};
  cursor: pointer;
  transition: 0.5s;
`
