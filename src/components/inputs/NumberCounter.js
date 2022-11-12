import React, { Component } from 'react'

export default class NumberCounter extends Component {

  render() {
    return (
      <div className="NumberCounter input">
        <h3>{this.props.label}</h3>
        <label htmlFor={this.props.htmlId}>
          <input id={this.props.htmlId} name={this.props.htmlId} type="number" onChange={this.props.callback} defaultValue={this.props.defaultValue}>
          </input>
        </label>
      </div>
    )
  }
}
