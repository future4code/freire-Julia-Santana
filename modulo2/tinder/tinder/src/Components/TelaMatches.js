import React, {useEffect, useState} from "react";
import axios from 'axios'

 export default function TelaPrincipal(){
 const [match, setMatch] = useState([])
 const [limpar, setLimpar] = useState("")
 
    const listaMatches = ()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/matches")
        .then(response =>{
            alert("Perfil salvo na lista")
            setMatch(response.data.matches)
    
        
        }).catch(
            erro=>{
                alert(erro)
            }
        )
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
