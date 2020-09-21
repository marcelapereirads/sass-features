import React, { Component } from "react";
import CodeViewer from "../../components/CodeViewer/CodeViewer";

class Examples extends Component {
    render() {
        const SASS_TEXT = `Enquanto a versão tradicional do Sass é interpretado de acordo com as quebras 
            de linha e tabulações, na extensão SCSS fazemos o uso de chaves e ponto e vírgula,
            tornando mais parecido com o CSS puro. Dessa forma, a extensão Sass é mais enxuta, porém
            acaba sendo menos utilizada, pois é menos legível.`;
    
        const SASS_CODE = `
        @mixin code__column($isRight)
            @extend %code__viewer
            background-color: $tertiary-color
        
            @if $isRight
                margin-right: 20px
                margin-left: 40px
            @else
                margin-right: 40px
                margin-left: 20px

        .code
            @include flexbox(row, flex-start, center)
            margin: 40px auto
        
            &__title
                background-color: $secondary-color
                color: $white
                font-weight: bold
                padding: 5px
            }
        
            &__right
                @include code__column(true)
            
            &__left
                @include code__column(false)
        `;

        const SCSS_CODE = `
        @mixin code__column($isRight) {
            @extend %code__viewer;
            background-color: $tertiary-color;
        
            @if $isRight {
                margin-right: 20px;
                margin-left: 40px;
            } @else {
                margin-right: 40px;
                margin-left: 20px;
            }
        }

        .code {
            @include flexbox(row, flex-start, center);
            margin: 40px auto;
        
            &__title {
                background-color: $secondary-color;
                color: $white;
                font-weight: bold;
                padding: 5px;
            }
        
            &__right {
                @include code__column(true);
            }
            
            &__left {
                @include code__column(false);
            }
        }
        `;

        return (
            <main className="content">
                <p>{SASS_TEXT}</p>
                <div className="content__examples" >
                    <CodeViewer title="Sass traditional syntax" className="code__right">
                        {SASS_CODE}
                    </CodeViewer>
                    <CodeViewer title="SCSS syntax" className="code__left">
                        {SCSS_CODE}
                    </CodeViewer>
                </div>
            </main>
        );
    }
}

export default Examples;