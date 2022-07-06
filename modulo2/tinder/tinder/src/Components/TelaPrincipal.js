import React, {useEffect, useState} from "react";
import axios from 'axios'



export default function TelaPrincipal(){

    const [profile, setProfile] = useState({})
    const [limpar, setLimpar] = useState([])
   

    const pegarDados = ()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/person")
        .then(response =>{
            console.log(response.data);
            setProfile(response.data.profile)
        })
       
    }
     const darMacth = (event)=>{
        const copiaLista = [...pegarDados()];

        copiaLista.push([])
       //quando der match devo gurdar o perfil da pessoa em um array, 
       //pra isso usar espelhamento
       setProfile(copiaLista)
     }
    useEffect (()=>{
        pegarDados()
        return ()=>{
            pegarDados()
        }
    },[]);
  

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


  
     
     return(
        <div>
            <h1> astromatch </h1>
            <p> {profile.photo} </p>
            <p> {profile.photo_alt} </p>
            <p> {profile.name} {profile.age} </p>
            <p> {profile.bio} </p>
            

            <button> dar match </button>
            <button onClick={()=>darMacth()}> deletar </button>
            <button> Ver Lista </button>
           

        </div>
    )
}
