import React, { Component } from 'react'
import axios from "axios";
import "../components/style.css"
export default class Story extends Component {
    state = {
        storyList: []
    }
    render() {
        const { storyList } = this.state;
        return (
            <div>
                {
                    storyList && storyList.map((item, index) => (
                        <dl key={index}>
                            <dt><img src={item.pic} alt="" /></dt>
                            <dd>
                                <p>{item.name}</p>
                                <p>{item.artist}</p>
                                <p>{item.playcnt}</p>
                            </dd>
                        </dl>
                    ))
                }
            </div>
        )
    }
    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27')
            .then(({ data }) => {
                this.setState({
                    storyList: data.list
                })
            })
    }
}
