import React from "react"
import {createGlobalStyle} from "styled-components"
import{
  BrowserRouter as Router,
}
from "react-router-dom"
import Rota from "./components/routes"
import Header from "./pages/header"

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
 ::-webkit-scrollbar{
  width:5px;
}
::-webkit-scrollbar-track{
  background:#2C2C2C;
}
::-webkit-scrollbar-thumb{
  width:2px;
  background:white;
  border-radius: 5px;
}
`

export default class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyle/>
        <Header/>
        <Rota/>
      </Router>
    )
  }
}