import { useNavigate } from "react-router-dom"

 export const goToAboutPage = (navigate)=> {
    navigate("/lista-de-viagens")

}

export const administrativo = (navigate)=> {
    navigate("/area-administrativa")
}



export const seEscrever = (navigate)=>{
    navigate("/se-candidatar-para-viajar")
  }

 export  const voltar = (navigate)=>{
    navigate(-1)
 }