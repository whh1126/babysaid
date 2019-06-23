import React from 'react'
import { Switch, Redirect, Route } from "react-router-dom";
import routers from "../routers/routerConfig"
function Routerview(props) {
    let { routers}=props
    let routeArr = routers && routers.filter((item, index) => !item.redirect);
    let redirectArr = routers && routers.filter((item, index) => item.redirect).map((item, index) =>
        <Redirect key={index} path={item.path} from={item.path} to={item.redirect} />
    )
    return <Switch>
        {
            routeArr && routeArr.map((item, index) => (
                <Route path={item.path} key={index} render={(props) => {
                    return <item.component {...props} child={item.children} />
                }} />
            )).concat(redirectArr)
        }

    </Switch>

}
export default Routerview