import logo from '../logo.svg';
import './App.scss';
import AuthContent from "./AuthContent/AuthContent";
import {useEffect} from "react";
import MainContent from "./MainContent/MainContent";
import HeaderContainer from "./Header/HeaderContainer";
import Preloader from "./Preloader/Preloader";
import {Redirect, Route, Switch} from "react-router-dom";

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
            <HeaderContainer/>
            <Switch>
                <Route exact path={"/web-lab/login"}>
                    <AuthContent/>
                </Route>
                <Route exact path={"/web-lab/registration"}>
                    <AuthContent/>
                </Route>
                <Redirect from={"*"} to={"/web-lab/login"} />
            </Switch>
        </div>
    )
    else return (
        <div>
            <HeaderContainer/>
            <Switch>
                <Route path="/web-lab/main">
                    <MainContent/>
                </Route>
                <Redirect from={"*"} to={"/web-lab/main"} />
            </Switch>
        </div>
    );
}

export default App;



