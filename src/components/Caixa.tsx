import React from "react";
import "./Caixa.css"

interface CaixaProps {
    imagem: string;
    nome: string;
}

const Caixa: React.FC<CaixaProps> = ({imagem, nome}) => {

    return(
        <div className="Corpo">
            
            <div className="Foto">
                <img src={imagem}></img>
            </div>

            <div className="Nome">
                <h3>{nome}</h3>
            </div>
            
        </div>
    );
}

export default Caixa;