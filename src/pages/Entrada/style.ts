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
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    h1 {
      padding: 2rem 1rem;
    }
    > div {
      width: 100%;
    }
    article {
      display: flex;
      width: 30%;
      justify-content: center;
    }
    @media (max-width: 900px) {
      height: 100%;
      section {
        width: 100%;
      }
      article {
        width: 100%;
      }
    }
  }
  ul {
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 2rem;
    border: solid 1px;
    border-top-color: #4b0082;
    border-right-color: #7b68ee;
    border-bottom-color: #ff69b4;
    border-left-color: #ffb6c1;
    li {
      width: 25%;
      word-wrap: break-word;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 900px) {
      gap: 2rem;
      li {
        font-size: 14px;
        text-align: center;
      }
    }
  }
  @media (max-width: 900px) {
    ul {
      border-left: none;
      border-right: none;
      padding: 0px;
    }
  }
`
export const ContentList = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  width: 50%;
  height: 50vh;
  table {
    width: 100%;
    td {
      text-align: center;
      padding: 0.5rem 1rem;
      border: solid 1px;
      border-top-color: #4b0082;
      border-right-color: #7b68ee;
      border-bottom-color: #ff69b4;
      border-left-color: #ffb6c1;
    }
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
