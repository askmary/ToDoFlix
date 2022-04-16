import React from "react"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from "react-router-dom"
import Logo from "./img/ToDoFLIX.png"
import User from "./img/user.png"
import Seta from "./img/seta.png"
import Icon from "./img/ICON.png"

const GlobalStyle = createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing:border-box;
   color:white;
   font-family:'Arial', sans-serif;
 }
 body{
   background-color:black;
 }
`
const Navbar = styled.nav`
 width:100%;
 height:5em;
 display:flex;
 justify-content:space-between;
`
const List = styled.ul`
 list-style:none;
`
const Linkk = styled(Link)`
 text-decoration:none;
`
const Container = styled.div`
 width: 30vw;
 display:flex;
 align-items:center;
 justify-content:space-evenly;
`
const Item = styled.li`
 font-weight:bold;
`
const Img = styled.img`
 width:7.3em;
`
const Container2 = styled.div`
 width: 50vw;
 display:flex;
 align-items:center;
 justify-content:space-evenly;
`
const Btnadd = styled.button`
 background-color:#E71B27;
 border-radius:4px;
 border:none;
 width:8.5vw;
 height:5vh;
 font-size:0.8rem;
`
const Search = styled.input`
 background-color:#2C2C2C;
 width:30vw;
 height:5vh;
 border-radius:4px;
 border:none;
 font-size:0.8rem;
 padding-left: 2.2vw;
 background-image: url(${Icon});
 background-repeat:no-repeat;
 background-position-y: center;
 background-position-x: 8px;
`
const Summary = styled.summary`
list-style: none;

&:-webkit-details-marker {
  display: none;
}
`
export default class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyle/>
        <Navbar>
          <Container>
            <Img src={Logo} alt="logo" />
            <List>
              <Item>
                <Linkk to="/">Início</Linkk>
              </Item>
            </List>
            <details>
              <Summary>Categorias</Summary>
              <List>
                <li>
                  <Linkk to="/todos">Todos</Linkk>
                </li>
                <li>Favoritos</li>
                <li>Já vistos</li>
                <li>Adicionados</li>
              </List>
            </details>
          </Container>
          <Container2>
            <Btnadd>Adicionar filme</Btnadd>
            <Search type="search" placeholder="Pesquisar"/>
            <img src={User} alt="usuario"/>
            <img src={Seta} alt="seta"/>
          </Container2>
        </Navbar>
      </Router>
    )
  }
}