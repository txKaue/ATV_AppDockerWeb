import React from "react";
import "./Home.css";
import logoDocker from "../assets/dockerLogo.png"
import logoReact from "../assets/reactLogo.png"
import Caixa from "../components/Caixa";
import camila from "../assets/camila.jpeg"
import kaue from "../assets/kaue.jpeg"
import jose from "../assets/jose.jpeg"

const Home: React.FC = () => {

    return(
        <div className="tudo">
            <header className="Topo">
                <img src={logoDocker}></img>
                <h1>Static Page to Docker</h1>
                <img src={logoDocker}></img>
            </header>
            <div className="fundo">
                <Caixa imagem={camila} nome="Camila"></Caixa>
                <Caixa imagem={kaue} nome="Kauê"></Caixa>
                <Caixa imagem={jose} nome="José"></Caixa>
            </div>

        </div>
    )

}

export default Home;