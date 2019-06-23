import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let { item } = this.props;
   
        return (
            <dl className="dl">
                <dt>
                    <img src={item.pic} alt="" />
                </dt>
                <dd>
                    <span style={{display:"block"}}>{item.artist}</span>
                    <p>{item.name}</p>
                    <h3>播放量<b>{item.playcnt}</b></h3>
                </dd>
            </dl>
        )
    }
}
