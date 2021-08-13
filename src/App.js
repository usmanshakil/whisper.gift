import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Index from "./components/pages/index/index";
import HowItWork from "components/pages/howItWork/howItWork";
import Thankyou from "components/pages/thankyou/thankyou";
export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/how-it-work" component={HowItWork} />
                <Route exact path="/thankyou" component={Thankyou} />
            </Switch>
        </Router>
    );
}
