import React, { Component } from 'react'
import subject from './HOC1'

/** Call this component in App.js to render in ui */
class VikasHoc extends Component {
    state={
        marks:0
    }

    marksIncremented=()=>{
        this.setState({marks:this.state.marks+1})
    }
  render() {
    return (
      <div>
        {/** we use to increment value when hover vikas marks */}
        <h2 onMouseOver={this.marksIncremented}>Vikas marks  {this.state.marks}, Vikas Subject {this.props.hocsub}</h2>
      </div>
    )
  }
}

export default subject(vikasHoc)