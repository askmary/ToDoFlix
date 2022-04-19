import React from "react"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import{
  BrowserRouter as Router,
  Link
}
from "react-router-dom"
import Route from "./components/routes"
import Logo from "./img/ToDoFLIX.png"
import User from "./img/user.png"
import Seta from "./img/seta.png"
import Icon from "./img/ICON.png"
import Modal from "./components/category"
import ModalBtn from "./components/addbtn"

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
 border: 2px solid red;
`
const Text = styled.h4`
 cursor:pointer;
`
const StyledLink = styled(Link)`
 text-decoration:none;
 
 &:hover{
  color:red;
}
`
const Container = styled.div`
 width: 30vw;
 display:flex;
 align-items:center;
 justify-content:space-evenly;
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
 height:4.5vh;
 font-size:0.8rem;
`
const Search = styled.input`
 background-color:#2C2C2C;
 width:30vw;
 height:4.5vh;
 border-radius:4px;
 border:none;
 font-size:0.8rem;
 padding-left: 2.2vw;
 background-image: url(${Icon});
 background-repeat:no-repeat;
 background-position-y: center;
 background-position-x: 8px;
`
export default class App extends React.Component{
  state={
    stateModal: false,
    stateBtnModal: false,
  }
  handleModal = () =>{
    this.setState({stateModal: !this.state.stateModal})
  }
  handleModalBtn = () =>{
    this.setState({stateBtnModal: !this.state.stateBtnModal})
  }
  render(){
    return(
      <Router>
        <GlobalStyle/>
        <Navbar>
          <Container>
            <Img src={Logo} alt="logo"/>
            <Text>
              <StyledLink to="/">Início</StyledLink>
            </Text>
            <Text onClick={this.handleModal}>Categorias <span>&#9663;</span></Text>
              {this.state.stateModal && <Modal/>}
          </Container>
          <Container2>
            <Btnadd onClick={this.handleModalBtn}>Adicionar filme</Btnadd>
             {this.state.stateBtnModal && <ModalBtn/>}
            <Search type="search" placeholder="Pesquisar"/>
            <img src={User} alt="usuario"/>
            <img src={Seta} alt="seta"/>
          </Container2>
        </Navbar>
        <Route/>
      </Router>
    )
  }
}