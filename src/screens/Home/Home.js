import React, { Component } from "react";
import LargeButton from "../../components/LargeButton/LargeButton";

class Home extends Component {
    render() {
        const sassText = `
        Segundo a documentação do SASS, CSS pode ser divertido, mas as folhas de estilo 
        estão ficando cada vez maiores, mais complexas e mais difíceis de serem mantidas.
        Nesse caso, os pré-processadores se tornam bastante uteis, pois permitem o uso de 
        recursos, como aninhamento, mixins e herança. O grande número de funcionalidades, 
        tornaram o SASS no pré-processador de CSS mais utilizado no mundo.
        `;

        return (
            <main className="row">
                <div className="col30">
                    <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="Logo do Sass" className="sass-logo" />
                </div>
                <div className="col70">
                    <p>{sassText}</p>
                    <LargeButton text="Documentação" url="https://sass-lang.com/documentation" target="_blank"/>
                </div>
            </main>
        );
    }
}

export default Home;