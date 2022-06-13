import React from 'react';

export  default class Etapa3 extends React.Component{
    render (){
       return (
    <div className='Etapa3' >
<body>
<div>
<h1> Informações Gerais de Ensino </h1>
</div>
<div>
     <p> 7- Por que você não terminou um curso de graduação? </p>
     <input value=""/>
</div>
 
 <div>
     <p> 7- Você fez algum curso complementar? </p>
     <select>
            <option value = "nenhum"> nenhum </option>
            <option value = "Curso Técnico"> Curso Técnico </option>
            <option value = "Curso de Inglês"> Curso de Inglês </option>
     </select>
 </div>
 <br/>
 <button> proxima etapa </button>
</body>
</div>
       )
    }
}