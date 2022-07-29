import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponderComentario from "../pages/ResponderComentario/ResponderComentario"
import LoginPage from '../pages/LoginPage/LoginPage'
import Comentario from '../pages/Comentario/Comentario'
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Cadastro from "../pages/Cadastro/Cadastro";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path={"/"} element={<LoginPage />} />

                <Route path={"/cadastro"} element={<Cadastro />} />
 
                <Route path={"/responder-comentario"} element={<ResponderComentario />} />

                <Route path={"/comentario"} element={<Comentario />} />

                <Route path={"/erro"} element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}
export default Router