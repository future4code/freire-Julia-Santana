
     import React from 'react';

  
     export  default class Etapa1 extends React.Component{
        render (){
           return (
        <div className='Etapa1' >
        <body>
        <div>
        <h1> etapa 1 - Dados Gerais </h1>
        </div>
        <div>
             <p> 1- Qual seu nome? </p>
             <input value=""/>
       </div>
       <div>
        <p> 2- Qual sua idade? </p>
            <input value="" />
        </div>
        <div>
        <p> 3- Qual sua idade? </p>
            <input value="" />
        </div>
        <div>
            <p> 4-  Qual a sua escolaridade? </p>
        <select>
            <option value = "ensino médio incompleto"> Ensino médio incompleto </option>
            <option value = "ensino médio completo"> Ensino médio completo </option>
            <option value = "ensino  superior incompleto"> Ensino superior incompleto </option>
            <option value = "ensino superior completo"> Ensino superior completo </option>
        </select>
          </div>

          <br/> 
          <button > Proxima etapa </button>
          </body>
         
        </div>
            )
             } 
             
         }
    



