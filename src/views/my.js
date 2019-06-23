import React, { Component } from 'react'
import "../components/style.css"
export default class My extends Component {
    render() {

        return (
            <div className="wrap">
                <header className="head">
                    <p style={{ textAlign: "center" }}>我的</p>
                </header>
                <div className="con">
                    <p className="p"> 我的下载</p>
                    <p className="p">我的收藏</p>
                    <p className="p">清除缓存</p>
                    <p className="p">关于我们</p>
                </div>
                <p className="close">退出应用</p>
            </div>
        )
    }
}
