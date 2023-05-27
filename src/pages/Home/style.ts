import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  width: 100%;
  transition: 1s;
  ::-webkit-scrollbar {
    width: 6px;
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

export const ContainerSection = styled.section`
  width: 100%;
  height: 5rem;

  border: solid 1px red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  /* border-top-color: #4b0082;
  border-right: none;
  border-bottom-color: #ff69b4; */
  border-left: none;
  label {
    font-size: 0px;
    background-color: transparent;
    input {
      background-color: transparent;
    }
  }
  > button {
    width: 4rem;
    color: #000;
    background-color: #fff;
  }
`
export const ContainerContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 99;
`
export const ContainerArticle = styled.article`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 10rem;
      width: 100%;
      background-color: #4b0082;
      background-image: linear-gradient(to right, #7b68ee, #ffb6c1);
      color: #000;
      border-radius: 10px;
    }
  }
  ul {
    list-style: none;
  }
  section {
    width: 50%;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      background-color: #4b0082;
      background-image: linear-gradient(to right, #7b68ee, #ffb6c1);
      color: #000;
      border-radius: 10px;
    }
  }
`
export const ContainerGrafic = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  > div {
    width: 31rem;
  }
`
