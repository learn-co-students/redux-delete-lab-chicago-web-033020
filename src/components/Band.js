import React, { Component } from 'react';


class Band extends Component {
  
  

  render() {
    console.log(this.props.key)
    return(
      <div>
        <li>{this.props.name}
        <button onClick={() => this.props.delete(this.props.id)}>delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
