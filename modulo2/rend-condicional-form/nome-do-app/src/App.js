import React from 'react'
import './App.css';
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"


export  default class App extends React.Component{
    render (){
       return (
        <div className='App' >
     <Etapa1/>
     <Etapa2/>
     <Etapa3/>
     <Final/>
    </div>
)
}
}


