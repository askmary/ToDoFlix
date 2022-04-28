import React from "react"
import styled from "styled-components"
import Batman from "../img/Batman.jpg"
import BtnFav from "../components/favbtn"
import Carousel from "react-elastic-carousel"
import MovieState from "../movieState.json"


const CarouselStyled = {
    itemsToShow:4,
    focusOnSelect:true,
    enableAutoPlay:true,
    autoPlaySpeed:2500,
    pagination: false,
    showArrows: true,
    enableMouseSwipe:false,
    outerSpacing:20
}

const Container = styled.section`
 width:100%;
 height:90vh;
`
const Subcontainer = styled.div`
 width:78%;
 height:45%;
 display:flex;
 justify-content:space-between;
 align-items:center;
`
const Div = styled.div`
 width:35vw;
 height:32vh;
 display:flex;
 flex-direction:column;
 margin-right:5vw;
`
const Title = styled.h1`
 font-size:3rem;
 padding-bottom:1vh;
`
const Visto = styled.h5`
 font-size:1rem;
 padding-bottom:1vh;
`
const Sinopse = styled.p`
width:30vw;
`
const ImgDestaque = styled.img`
 width:30vw;
 border-radius: 4px;
 margin-left:3.5vw;
`
const SubCont = styled.div`
 width:100%;
 height:50%;
`
const Slide = styled.div`
 width:21vw;
 height:100%;
 position:relative;
`
const Img = styled.img`
 width:100%;
 height:22vh;
 border-radius:5px;
`
const Title2 = styled.h2`
 font-size:16px;
 margin: 1vh 0 1vh 0;
`
const H2 = styled.h2`
 font-size:16px;
 margin: 0 0 2vh 6vw;
`
const Overview = styled.p`
 font-size:0.8rem;
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
 left:19vw;
 
 &:focus{
    background-color:red;
}
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

export default class App extends React.Component{
    state ={
        batman:{
            title: "Batman",
            overview: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
            nota: 5
        },
        movie: MovieState
    }
    render(){
        let {batman} = this.state
        return(
            <Container>
                <Subcontainer>
                    <ImgDestaque src={Batman} alt="poster batman" title="poster batman" />
                    <Div>
                        <BtnFav/>
                        <Visto>Visto recentemente</Visto>
                        <Title>{batman.title}</Title>
                        <Sinopse>{batman.overview}</Sinopse>
                        <div style={{width:"60px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <p style={{padding:"1vh 0.5vw 0 0vw"}}>{this.state.batman.nota}/5</p>
                                    <Svg style={{margin:"0.5vh 0.5vw 0 0"}} id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <rect id="Box" width="17" height="17" fill="none" />
                                        <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={this.state.batman.nota >= 5 ? { fill: '#0B3B0B' } : this.state.batman.nota === 4 ? { fill: '#64FE2E' } : this.state.batman.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                                    </Svg>
                        </div>
                    </Div>
                </Subcontainer>
                <SubCont>
                    <H2>Destaques</H2>
                    <Carousel {...CarouselStyled}>
                        {this.state.movie.map((item) => (
                            <Slide>
                                <Btn>&#10084;</Btn>
                                <Img src={item.poster} alt={`Capa do filme ${item.title}`}/>
                                <NameBox >
                                <Title2>{item.title}</Title2>
                                <div style={{width:"60px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <p style={{padding:"0 0.5vw 0 0.5vw"}}>{item.nota}/5</p>
                                    <Svg style={{padding:"0 0vw 0.5vh 0"}} id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <rect id="Box" width="17" height="17" fill="none" />
                                        <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.nota >= 5 ? { fill: '#0B3B0B' } : item.nota === 4 ? { fill: '#64FE2E' } : item.nota === 3 ? { fill: 'yellow' } : { fill: 'red' }} />
                                    </Svg>
                                </div>
                            </NameBox>
                                <Overview>{item.overview}</Overview>
                            </Slide>
                        ))}
                    </Carousel>
                </SubCont>
            </Container>
        )
    }
}