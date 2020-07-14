import React, { Component } from 'react'
import BTProductIem from './BTProductIem'

export default class ProductComponent extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <h3 className = "display-4 text-center"></h3>
                <div>
                    <div><BTProductIem /></div>
                    <div><BTProductIem /></div>
                    <div><BTProductIem /></div>
                    <div><BTProductIem /></div>
                </div>
            </div>
        )
    }
}
