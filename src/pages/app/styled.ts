import styled from 'styled-components'

export const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 99;
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    width: 50%;
    p {
      font-weight: ${(props) => props.theme.fonts_400};
    }
    form {
      height: 100%;
      width: 100%;
      fieldset {
        legend {
          font-size: 24px;
          padding-left: 1.5rem;
        }
        padding: 1rem 0.5rem;
        border: solid 1px;
        border-top-color: #4b0082;
        border-right-color: #7b68ee;
        border-bottom-color: #ff69b4;
        border-left-color: #ffb6c1;
        border-radius: 0px 20px 5px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        align-items: center;
        gap: 0.5rem;
        label {
          display: flex;
          flex-direction: column;
          width: 90%;
          font-size: 0px;
          input {
            background-color: transparent;
          }
        }
        > button {
          margin-top: 2rem;
          width: 90%;
          background-color: transparent;
          color: ${(props) => props.theme.white};
          border: solid 1px;
          border-top-color: #4b0082;
          border-right-color: #7b68ee;
          border-bottom-color: #ff69b4;
          border-left-color: #ffb6c1;
          :hover {
            transition: 1s;
            background-color: #4b0082;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    section {
      width: 80%;
    }
  }
`
