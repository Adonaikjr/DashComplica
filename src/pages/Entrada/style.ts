import styled from 'styled-components'

export const ContainerEntrada = styled.main`
  z-index: 99;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > div {
      flex: 1;
    }
  }
  ul {
    width: 100%;
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
    display: flex;
    list-style: none;
    gap: 2rem;
    border: solid 1px;
    border-top-color: #4b0082;
    border-right-color: #7b68ee;
    border-bottom-color: #ff69b4;
    border-left-color: #ffb6c1;
  }
`
export const ContentList = styled.div`
  overflow: auto;
  border: solid 1px;
  border-top-color: #4b0082;
  border-right-color: #7b68ee;
  border-bottom-color: #ff69b4;
  border-left-color: #ffb6c1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  width: 50%;
  height: 40vh;
  li {
    font-size: 18px;
  }
  ::-webkit-scrollbar {
    width: 15px;
    transition: 1s;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    transition: 1s;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.base_border};
    transition: 1s;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
    transition: 1s;
  }
`
