import HomePage from '../pages/HomePage';
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage';
import ListTripsPage from '../pages/ListTripsPage';
import LoginPage from '../pages/LoginPage';
import TripDetailPage from '../pages/TripDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';







export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />

                    <Route path="/lista-de-viagens" element={<ListTripsPage />} />

                    <Route path="/se-candidatar-para-viajar" element={<ApplicationFormPage />} />

                    <Route path="/area-administrativa" element={<LoginPage/>} />

                     <Route path="/lista-de-viagem " element ={<TripDetailPage/>} />

                         <Route path="/criar-viagem" element ={<CreateTripPage/>} />

                        <Route path="6" element ={<ListTripsPage/>} />

                 
                </Routes>




            </BrowserRouter>
        </div>
    )
}
