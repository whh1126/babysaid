import React, { Component } from 'react'
import axios from "axios";
import "../components/style.css";
import Routerviews from "../routers/routerviews";
// import routers from "../routers/routerConfig"
// import { NavLink } from "react-router-dom"
export default class Listen extends Component {
    state = {
        list: [],
    }
    render() {
        const { list } = this.state;
        // const { child } = this.props
        return (
            <>
                {
                    list && list.map((item, index) => (
                        item.id ? <div key={index} className="all">
                            <div className="top"> <img src={item.pic} alt="" /></div>
                            <div className="bot">
                                <p>{item.name}</p>
                                <h3>{item.score}分</h3>
                            </div>
                        </div> : null
                    ))
                }
                {/* <Routerviews routers={child}></Routerviews> */}
                <div>
                    {/* <NavLink to="/childsong">儿歌</NavLink>
                    <NavLink to="/childstory">故事</NavLink> */}
                </div>
            </>
        )
    }
    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getlistv2&act=home&pagesize=30&pid=26')
            .then(({ data }) => {
                console.log(data.list)
                this.setState({
                    list: data.list
                })
            })
    }
}
