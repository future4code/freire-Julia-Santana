import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipesListPage from '../pages/RecipesListPage/RecipeListPage'
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path={"login"} element={<LoginPage />} />

                <Route path={"/cadastro"} element={<SingUpPage />} />
 
                <Route path={"/"} elemente={<RecipesListPage/>}/> 

                <Route path={"/adicionar-receita"} element={<AddRecipePage />} />

                <Route path={"/detalhe/:id"} element={<RecipeDetailPage />} />

                <Route path={"/erro"} element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}
export default Router