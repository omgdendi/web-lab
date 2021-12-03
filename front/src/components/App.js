import logo from '../logo.svg';
import './App.scss';
import AuthContent from "./AuthContent/AuthContent";
import {useEffect} from "react";
import MainContent from "./MainContent/MainContent";
import HeaderContainer from "./Header/HeaderContainer";
import Preloader from "./Preloader/Preloader";
import {Routes, Route, Navigate} from "react-router-dom";

const App = (props) => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.checkAuth();
        }
    }, [])

    if (props.isLoading) {
        return (
            <div>
                <HeaderContainer/>
                <Preloader/>
            </div>
        )
    }
    if (!props.isAuth) return (
        <div>
            <Navigate to={"/web-lab/login"}/>
            <HeaderContainer/>
            <Routes>
                <Route path="web-lab/login" element={<AuthContent/>}/>
                <Route path="*" element={<AuthContent/>}/>
            </Routes>
        </div>
    )
    else return (
        <div>
            <Navigate to={"/web-lab/main"}/>
            <HeaderContainer/>
            <Routes>
                <Route path="/web-lab/main" element={<MainContent/>}/>
                <Route path="*" element={<MainContent/>}/>
            </Routes>
        </div>
    );
}

export default App;



