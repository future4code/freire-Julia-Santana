import React, {useEffect, useState} from "react";
import axios from 'axios'

export default function TelaPrincipal(){
 const [match, setMatch] = useState([])



    const listaMatches = ()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/matche")
        .then(response =>{
            console.log(response.data);
            setMatch(response.data.matches)
        })
    }

    useEffect (()=>{
        listaMatches()
    }, [])

    const limparLista = ()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/clear")
        .then(response =>{
            console.log(response.data);
            setLimpar(response.data.clear)
        })
       
    }

    useEffect(()=>{
        limparLista()
        return ()=>{
            limparLista()
        }
    },[setLimpar])

    return (
       <div>
         <button onClick={()=>limparLista()}> Limpar lista </button>

       </div>
    )
}
