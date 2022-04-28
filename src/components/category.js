import React from "react"
import styled from "styled-components"
import{
    Link
  }
from "react-router-dom"

const Container = styled.div`
 width:11vw;
 height:22vh;
 position:absolute;
 top:8vh;
 left:19.5vw;
 background:black;
 z-index:5;
`
const ListModal = styled.ul`
 list-style:none;
 width:100%;
 height:100%;
`
const Item = styled.li`
 padding: 2.5vh 0 0 0.5vw;
`
const StyledLink = styled(Link)`
 text-decoration:none;
 
 &:hover{
    color:red;
}
`

export default class App extends React.Component{
    render(){
        return(
            <Container>
                <ListModal>
                    <Item>
                        <StyledLink to="/todos">Todos</StyledLink> 
                    </Item>
                    <Item>
                        <StyledLink to="/favoritos">Favoritos</StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/vistos">Já vistos</StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to="/adicionados">Adicionados</StyledLink>
                    </Item>
              </ListModal>
            </Container>
        )
    }
}