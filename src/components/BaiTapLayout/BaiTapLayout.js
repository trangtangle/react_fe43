import React, { Component } from 'react'
import BTHeader from './BTHeader'
import SliderComponent from './SliderComponent'
import BTProductIem from './BTProductIem'
import BTProductList from './BTProductList'

export default class BaiTapLayout extends Component {
    //nội dung giao diện react class component chứa trong phương thức render
    render() {
        return (
            <div>
                <BTHeader />
                <SliderComponent />
                <BTProductIem />
                <BTProductList />
            </div>
        )
    }
}
