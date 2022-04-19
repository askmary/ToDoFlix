import React from "react"
import{
    Routes,
    Route
  }
from "react-router-dom"
import Home from "../pages/home"
import Todos from "../pages/todos"
import Favoritos from "../pages/favoritos"
import Vistos from "../pages/vistos"
import Adc from "../pages/adc"

export default class App extends React.Component{
    render(){
        return(
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="/vistos" element={<Vistos/>}/>
                <Route path="/adicionados" element={<Adc/>}/>
             </Routes>
        )
    }
}