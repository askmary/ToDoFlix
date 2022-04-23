import React from "react"
import styled from "styled-components"
import Rating from "react-rating-stars-component"

const Container = styled.div`
  border: 2px solid white;
  width:55vw;
  height:80vh;
  position:absolute;
  right:22.5vw;
  top:5vw;
  background:pink;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  z-index:1;
`
const Title = styled.h2`
 

`
/*border: 1px solid #808080;*/
export default class App extends React.Component{
    render(){
        return(
            <Container>
                <form>
                    <Title>Adicionar Filme</Title>
                    <label>Nome</label>
                    <input type="text"/>
                    <label>Descrição</label>
                    <textarea></textarea>
                    <legend>Status</legend>
                    <input id="assisti" type="radio" name="status" value="Assisti"/>
                    <label for="assisti">Já assisti</label>
                    <input id="naoassisti" type="radio" name="status" value="Não assisti"/>
                    <label for="naoassisti">Ainda não assisti</label>
                    <Rating></Rating>
                </form>
                <form>
                    
                </form>

            </Container>
        )
    }
}