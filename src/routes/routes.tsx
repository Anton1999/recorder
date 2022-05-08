import React from "react"
import { Switch, Route } from "react-router-dom"
import {Audios} from "../pages/Audio/audios";
import {Collection} from "../pages/Collection/collection";

export const AppRoutes: React.FC = () => (
    
    <Switch>
        <Route path={"/audios/:audio/:token"} component={Audios}/>
        <Route path={"/collection/:collection/:token"} component={Collection}/>
    </Switch>

);
