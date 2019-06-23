import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import routers from "../routers/routerConfig";
import Routerview from "./routerviews"
function MyRouter() {
    return <BrowserRouter >
        <Routerview routers={routers}></Routerview>
    </BrowserRouter>

}
export default MyRouter