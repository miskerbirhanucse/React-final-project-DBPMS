import React, { Component } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Sidebar from './Sidebar'
export default class Fullpage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
                <Sidebar/>
                
            </div>
        )
    }
}
