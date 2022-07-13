import { useState, useEffect } from 'react'
import "./Index.css"
import { useNavigate } from "react-router-dom";
import { goToAboutPage, administrativo } from '../Routes/Cordinaton';
import { Cordination } from '../Routes/Cordinaton';

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <header className='header'> Infinity </header>

            <button onClick={() => goToAboutPage(navigate)}> Ver Viagems </button>
            <button onClick={() => administrativo(navigate)}> Area Administrativa</button>

            <footer className='footer' />
        </div>
    )
}
export default HomePage