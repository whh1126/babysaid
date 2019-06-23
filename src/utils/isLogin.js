import React, { Component } from 'react'
const isLogin = (Com) => {
    return class extends Component {
        state = {
            isLogin: false
        }
        render() {
            return (
                this.state.isLogin ? <Com /> : null
            )
        }
        componentDidMount() {
            let user = window.localStorage.user;
            let { history } = this.props;
            if (user) {
                this.setState({
                    isLogin: true
                })
            } else {
                history.push('/login')
            }
        }
    }
}
export default isLogin
