import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'

export class Bands extends Component {

    renderBands = () => {
        return this.props.bands.map(band => <Band band={band} key={band.id} deleteBand={this.props.deleteBand} />)
    }

    render() {
        console.log(this.props.bands)
        return (
            <div>
                <ul>
                    {this.renderBands()}
                </ul>
            </div>
        )
    }
}


export default Bands
