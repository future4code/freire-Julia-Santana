import React, {useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import TelaMatches from "./TelaMatches";
 



const div = styled.div`
    padding: 20px 20px 0px;
    display: flex;
     flex-direction: column;
     flex: 1 1 0%;
    -moz-box-pack: end;
      justify-content: flex-end;
`
const img = styled.img `
     width: 100%;
     display: block;
     z-index: 1;
`

export default function TelaPrincipal(){

    const [profile, setProfile] = useState({})
    console.log(profile);
    const [limpar, setLimpar] = useState([])
    const [click, setclick] = useState (undefined)
    const [tela, setTela]= useState ()
   
   

    function pegarDados (){
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/person")
        .then(response =>{
            console.log(response.data.profile)
            
            setProfile(response.data.profile)
        }).catch(erro=>{
            alert(erro.response.data)
        })
    }
     
    const darMacth =(choice)=>{

       const body = {
            id:profile.id,
            choice:choice
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/choose-person", body)
        .then(response=>{
            alert("Voce deu Match")
            
            pegarDados()
            
        }).catch(
            erro=>{
                alert(erro.response.data);
              
            }
        
        )
        console.table(body);
        
      }

      const rejeitar =(choice)=>{

        const body = {
             id:profile.id,
             choice:choice
         }
 
         axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Julia/choose-person", body)
         .then(response=>{
             alert("Voce rejeitou esse perfil")
           
             
             
             
         }).catch(
             erro=>{
                 alert("voce rejeitou");
               
             }
         
         )
            }
      

      const trocarTela =()=>{
        setTela(TelaMatches)
        
     }
     

    useEffect (()=>{
        pegarDados()
        
    },[]);

    

     return(
        <div className="renderizaçao">
            <h1 className="titulo"> astromatch </h1>

          

            <img src={profile?.photo} alt="" className="imagem"/> 
           
            <p> {profile?.photo_alt} </p>
            <p className="nome"> {profile?.name} {profile.age} </p>
            <p className="bio"> {profile?.bio} </p>


             <button onClick={trocarTela}> Ver Lista </button>


            
              
            <button onClick= {()=> darMacth(true) }> dar match </button>
        
            <button onClick={()=> rejeitar(false)}> deletar </button>
            
           

        </div>
    )
}
