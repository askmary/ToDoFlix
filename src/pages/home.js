import React from "react"
import styled from "styled-components"
import Batman from "../img/Batman.jpg"
import BtnFav from "../components/favbtn"
import Carousel from "react-elastic-carousel"


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
 height:48%;
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
export default class App extends React.Component{
    state ={
        batman:{
            title: "Batman",
            overview: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
        },
        movie:[
            {
                title: "Coringa",
                poster: "https://wp.ufpel.edu.br/empauta/files/2019/10/Coringa.retang.jpg",
                overview: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante."
            },
            {
                title: "Hunter x Hunter: The Last Mission",
                poster:"https://www.justwatch.com/images/backdrop/180763325/s640/hunter-x-hunter-the-last-mission",
                overview: "Gon e Killua enfrentam inimigos do passado quando Jed aparece decidido a divulgar o histórico de operações secretas dos Hunters."
            },
            {
                title:"Red: Crescer é uma fera",
                poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C2B147C9894D2972A53DE0663537606531C8245E379560BDD384BEDB861515E/scale?width=1200&aspectRatio=1.78&format=jpeg",
                overview: "Mei é uma garota que vive o auge de seus 13 anos no começo dos anos 2000. Inexplicavelmente, ela passa a se transformar num gigante panda vermelho sempre que fica nervosa ou animada (o que é uma constante)."
            },
            {
                title:"Doutor Estranho no Multiverso da Loucura",
                poster:"http://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-2.jpg",
                overview: "Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário."
            },
            {
                title:"Your Name",
                poster:"https://wallpapers.com/images/high/kimi-no-na-wa-taki-poster-f16a4cccypn81lzw.jpg",
                overview: "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos."
            },
            {
                title:"Bohemian Rhapsody",
                poster:"https://i2.wp.com/linkezine.com.br/wp-content/uploads/2018/11/bohemian-rhapsody-filme.jpeg?fit=1920%2C1080",
                overview: "Freddie Mercury, Brian May, Roger Taylor e John Deacon formam a banda de rock Queen em 1970. Quando o estilo de vida agitado de Mercury começa a sair de controle, o grupo precisa encontrar uma forma de lidar com o sucesso e os excessos de seu líder."
            },
            {
                title:"Encanto",
                poster:"https://www.eusemfronteiras.com.br/wp-content/uploads/2022/02/poster-encanto-e1645042210615-810x504.jpg",
                overview: "Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. "
            },
            {
                title:"Pantera Negra",
                poster:"https://www.agitossp.com.br/wp-content/uploads/2019/01/panteranegra-696x364.jpg",
                overview: "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados."
            },
            {
                title:"Moana",
                poster:"https://uploads.jovemnerd.com.br/wp-content/uploads/2016/09/moana-disney-mar-1210x544.jpg",
                overview:"Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos."
            },
            {
                title:"Um Lugar Silencioso",
                poster:"https://i0.wp.com/cinestera.com.br/wp-content/uploads/2019/01/um-lugar-silencioso-cr%C3%ADtca-.jpg?fit=800%2C445&ssl=1",
                overview:"Em uma fazenda nos Estados Unidos, uma família do Meio-Oeste é perseguida por uma entidade fantasmagórica assustadora. Para se protegerem, eles devem permanecer em silêncio absoluto, a qualquer custo, pois o perigo é ativado pela percepção do som."
            }
        ]
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
                    </Div>
                </Subcontainer>
                <SubCont>
                    <H2>Destaques</H2>
                    <Carousel {...CarouselStyled}>
                        {this.state.movie.map((item) => (
                            <Slide>
                                <Img src={item.poster} alt={`Capa do filme ${item.title}`}/>
                                <Title2>{item.title}</Title2>
                                <Overview>{item.overview}</Overview>
                            </Slide>
                        ))}
                    </Carousel>
                </SubCont>
            </Container>
        )
    }
}