import React, { Component } from "react";

const features = [
    {
        name: `Comentários`,
        content: `
/* Esse comentário ficará visível no CSS*/
// Esse será ignorado
        `
    },
    {
        name: `Variáveis`,
        content: `
$hover-color: #2b2c2c;
        `
    },
    {
        name: `Debug no terminal`,
        content: `
    @debug "Total: #{(100% - (($default-padding + $default-margin) * 4)) / 2}";
        `
    },
    {
        name: `Placeholders`,
        content: `
%full-size {
    width: 100%;
    height: 100%;
}
        `
    },
    {
        name: `Mixins`,
        content: `
@mixin flexbox($direction, $align, $justify) {
    display: flex;
    flex-direction: $direction;
    align-items: $align;
    justify-content: $justify;
}
        `
    },
    {
        name: `Funções`,
        content: `
@function width-calc() {
    @return ((100% - $padding) / 2) - (3 * $margin);
}
        `
    },
    {
        name: `Operadores`,
        content: `
width: (100% - (($padding + $margin) * 4)) / 2;
        `
    },
    {
        name: `Importações de outros arquivos`,
        content: `
@import "./screens/Examples/Examples.scss";
        `
    },
    {
        name: `Modularização`,
        content: `
@use "features";
        `
    }
];

class Features extends Component {
    render() {
        return (
            <main className="feature">
                {features.map(feature => {
                    return <div className="feature__item" key={feature.name} >
                        <span>{feature.name}</span>
                        <pre className="feature__text">{feature.content}</pre>
                    </div>
                })}
            </main>
        );
    }
}

export default Features;