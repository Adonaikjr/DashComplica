import styled from 'styled-components'

export const ContainerHome = styled.main`
  animation-name: top-bottom;
  animation-duration: 2s;
  position: relative;
  display: flex;
  width: 100%;
  transition: 2s;
  height: 100%;
  z-index: 99;
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
  // border: solid 1px;
  display: flex;
  z-index: 99;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top-color: #4b0082;
  border-right: none;
  border-bottom-color: #ff69b4;
  border-left: none;
  gap: 1rem;
  label {
    font-size: 0px;
    background-color: transparent;
    input {
      background-color: transparent;
    }
  }
  transition: 1s;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  transition: 1s;
  width: 100%;
`
export const ContainerArticle = styled.article`
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 1rem;
  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      opacity: 0.8;
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
    width: 40%;
    height: 100%;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      background-color: #4b0082;
      background-image: linear-gradient(to left, #7b68ee, #ffb6c1);
      color: #000;
      border-radius: 10px;
      opacity: 0.8;
    }
  }
`
export const ContainerGrafic = styled.div`
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  > div {
    width: 31rem;
  }
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
    align-items: center;
    > div {
      border: solid transparent;
      width: 90%;
    }
  }
`
export const ContainerModal = styled.div`
  animation-name: top-bottom;
  animation-duration: 2s;
  position: absolute;
  width: 100%;
  @keyframes top-bottom {
    0% {
      left: 0px;
      top: -500px;
    }
    25% {
      left: 0px;
      top: 0px;
    }
    50% {
      left: 0px;
      top: 0px;
    }
    75% {
      left: 0px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
  z-index: 100;
  fieldset {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-color: #000;
    border-radius: 10px;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > button {
      margin-top: 1rem;
    }
  }
`
