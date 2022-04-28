import React from "react";
import styled from "styled-components"
import MovieState from "../movieState.json"
import Icon from "../img/ICON.png"

const Container = styled.section`
 width:100%;
 display:flex;
 flex-direction:column;
 margin: 2vh 0 0 0;
`
const SubContainer = styled.div`
 display:flex;
 flex-wrap:wrap;
 margin-left: 2vw;
`
const Box = styled.div`
 width:19vw;
 height:100%;
 margin: 0 0 4vh 1vw;
 position:relative;
`
const Img = styled.img`
 width:100%;
 height:22vh;
 border-radius:5px;
`
const Title = styled.h2`
 font-size:16px;
 margin: 1vh 0 1vh 0;
`
const H1 = styled.h1`
 font-size:29px;
 margin: 2vh 0 1vh 3.5vw;
 font-weight:300;
`
const Overview = styled.p`
 font-size:0.8rem;
`
const Svg = styled.svg`
    width:19px;
    height:20px;
`
const NameBox = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Btn = styled.button`
 width:1.7vw;
 height:3.5vh;
 border:none;
 background-color:gray;
 border-radius:50%;
 font-size:20px;
 cursor:pointer;
 margin:1vh 0 2vh 0;
 position:absolute;
 left:17vw;
 
 &:focus{
    background-color:red;
}
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
 position:absolute;
 top:2.8vh;
 left:61.5vw;
`

export default class App extends React.Component{
    state ={
        filter:[],
        movie: MovieState
    }
    async componentDidMount(){
        this.moviefilter()
    }
    moviefilter = async() => {
        const {movie} = this.state
        const filmsfilter = this.setState({
            filter: movie
        })
    }
    changeMovie = (e) =>{
        const {movie} = this.state
        if(e.target.value === ""){
            this.setState({
                filter: movie
            })
            return 
        }
        const filmsconvert = movie.filter((item) => {
            if(item.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return true 
            }
        })
        this.setState({
            filter: filmsconvert
        })
    }
    render(){
        return(
            <Container>
                <Search type="text" placeholder="Pesquisar" onChange={this.changeMovie}/>
                <H1>Todos</H1>
                <SubContainer>
                    {this.state.filter.map((item) => (
                            <Box>
                                <Btn>&#10084;</Btn>
                                <Img src={item.poster} alt={`Capa do filme ${item.title}`}/>
                                <NameBox >
                                <Title>{item.title}</Title>
                                <div style={{width:"60px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <p style={{padding:"0 0.5vw 0 0.5vw"}}>{item.nota}/5</p>
                                    <Svg style={{padding:"0 0vw 0.5vh 0"}} id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <rect id="Box" width="17" height="17" fill="none" />
                                        <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.nota >= 5 ? { fill: '#0B3B0B' } : item.nota === 4 ? { fill: '#64FE2E' } : item.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                                    </Svg>
                                </div>
                            </NameBox>
                                <Overview>{item.overview}</Overview>
                            </Box>
                        ))}
                </SubContainer>
            </Container>
        )
    }
}