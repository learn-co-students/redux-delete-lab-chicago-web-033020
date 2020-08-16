import React, { Component } from 'react'
import Band from './Band.js'

class Bands extends Component {

  renderBand = () => this.props.bands.map(band => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.renderBand()}
      </div>
    )
  }
}

export default Bands
