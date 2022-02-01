import React, { Component } from 'react'
import NoImage from "./notav.jpg"

export default class NotAvailable extends Component {
    render() {
        return (
            <div>
                <img src={NoImage} style={{height:"50%", width:"50%"}} alt="No image found" />
            </div>
        )
    }
}
