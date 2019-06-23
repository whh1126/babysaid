import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/listen">宝宝听</NavLink>
                <NavLink to="/watch">宝宝看</NavLink>
                <NavLink to="/my">我的</NavLink>
            </div>
        )
    }
}
