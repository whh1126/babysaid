import React, { Component } from 'react'
import Footer from "../components/Footer";
import Routerview from "../routers/routerviews"
import { NavLink } from "react-router-dom";
export default class Watch extends Component {
    render() {
        let { child} = this.props;
        return (
            <div className="wrap">
                <div className="header">
                    <NavLink to="/watch/listen">听</NavLink>
                    <NavLink to="/watch/story">看</NavLink>
                    <NavLink to="/watch/song">歌</NavLink>
                </div>
                <section>
                    <Routerview routers={child}></Routerview>
                </section>
                <Footer></Footer>
            </div>
        )
    }
  
}