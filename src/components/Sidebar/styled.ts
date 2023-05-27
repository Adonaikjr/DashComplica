import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerSidebar = styled.div`
  z-index: 99;
  border: solid 1px;
  border-top-color: #4b0082;
  border-right-color: #7b68ee;
  border-bottom-color: #ff69b4;
  border-left-color: #ffb6c1;
  height: 100vh;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 200px;
    border-radius: 18px;
  }
  nav {
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      /* li {
       
        &.selected {
          background-color: aqua;
          color: ${(props) => props.theme.base_fontColor_btn};
        }
        button {
          background-color: transparent;
          color: white;
          border: none;
        }
        :hover {
          transition: 0.5s;
          background-color: aqua;
          color: ${(props) => props.theme.base_fontColor_btn};
        }
      } */
    }
  }
`
interface PropsLinkNavigate {
  active?: boolean
}

export const LinkNavigate = styled(Link)<PropsLinkNavigate>`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  height: 4rem;
  list-style: none;
  cursor: pointer;
  transition: 0.6s;
  border-top-color: #4b0082;
  border-right-color: #7b68ee;
  border-bottom-color: #ff69b4;
  border-left-color: #ffb6c1;
  background-color: ${(props) =>
    props.active ? props.theme.white : 'transparent'};
  width: 90%;
  text-align: center;
  color: ${(props) =>
    props.active ? props.theme.base_background : props.theme.white};
`
