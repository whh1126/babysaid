import React from 'react';
import Loadable from "react-loadable";

const Loading = () => {
    return <div>
        <img src={require('../img/loading.jpg')} alt="" />
    </div>
}
const Listen = Loadable({
    loader: () => import('../views/listen'),
    loading: Loading
})
const Watch = Loadable({
    loader: () => import('../views/watch'),
    loading: Loading
})
const My = Loadable({
    loader: () => import('../views/my'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('../views/login'),
    loading: Loading
})
const Story = Loadable({
    loader: () => import('../views/story'),
    loading: Loading
})
const Song = Loadable({
    loader: () => import('../views/song'),
    loading: Loading
})
// const Childsong = Loadable({
//     loader: () => import('../views/childsong'),
//     loading: Loading
// })
// const Childstory = Loadable({
//     loader: () => import('../views/childstory'),
//     loading: Loading
// })
const Cart = Loadable({
    loader: () => import('../views/cart'),
    loading: Loading
})

const routers = [{
    path: "/listen",
    component: Listen,
    children: [{
        // path: "/listen/childsong",
        // component: Childsong
    }, {
        // path: "/listen/childstory",
        // component: Childstory
    }, {
        // path: "/listen",
        // redirect: "/listen/childsong"
    }]
}, {
    path: "/watch",
    component: Watch,
    children: [{
        path: "/watch/story",
        component: Story
    }, {
        path: "/watch/song",
        component: Song
    }, {
        path: "/watch/cart",
        component: Cart
    }, {
        path: "/watch/listen",
        component: Listen
    }, {
        path: "/watch",
        redirect: "/watch/story"
    }
    ]
}, {
    path: "/my",
    component: My
},
{
    path: "/login",
    component: Login
},
{
    path: "/",
    redirect: "/watch"

}]
export default routers