import React from 'react'

import styled from 'styled-components'


const DivCard = styled.div`

    display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
`

 const CardPequeno =(props) => {
    return(
        <>
       
       <DivCard>
           <p> {props.email} </p>

       </DivCard>

       <DivCard> 
            <p> {props.endereço} </p>

       </DivCard>

        </>
      
    )
} 
    export default CardPequeno 