import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import axios from "axios"
import Item from "../components/Item";
import "../components/style.css"
export default class Song extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state
        return (
            <>
                {
                    list && list.map((item, index) => (
                       item.id? <Item key={index} item={item} />:null
                    ))
                }
            </>
        )
    }
    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29').then((res) => {
            console.log(res.data)
            this.setState({
                list: res.data.list
            })
        })
    }
}
