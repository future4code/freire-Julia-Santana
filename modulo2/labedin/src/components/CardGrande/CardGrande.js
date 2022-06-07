import React from 'react';

import styled from 'styled-components'

const Bigcard= styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    flex-direction: column;
    justify-items: flex-start;
`

const imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`

const nome = styled.h4 `

    margin-bottom: 15px;

`


function CardGrande(props) {
    return (
    <Bigcard>
            <imagem src={ props.imagem} />
            <div>
                <nome>{ props.nome }</nome>
                <p>{ props.descricao }</p>
            </div>
   </Bigcard>
    )
}

export default CardGrande;