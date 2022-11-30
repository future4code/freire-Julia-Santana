import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "../Pages/home"
import { detalhesFilme } from "../Pages/detalhesFilme"

export const Router = ()=>{

    return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route  path='/detalhesFilme' element={<detalhesFilme/>} ></Route>
      </Routes>
    </BrowserRouter>
    )
}