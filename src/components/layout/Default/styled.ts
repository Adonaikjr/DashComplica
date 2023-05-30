import styled from 'styled-components'
export const ContainerLayoutDefault = styled.div`
  display: flex;
  transition: 1s;
  #hero {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
