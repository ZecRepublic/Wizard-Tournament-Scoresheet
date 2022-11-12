import React, { Component } from 'react'

export default class BoolToggle extends Component {
  constructor(props) {
    super(props)

    this.htmlId = props.htmlId;
    this.label = props.label
  }
  render() {
    return (
      <div className="BoolToggle input">
        <h3>{this.label}</h3>
        <label htmlFor={this.htmlId}>
          <input id={this.htmlId} name={this.htmlId} type="checkbox" defaultChecked={this.props.defaultValue} onChange={this.props.callback}></input>
          <span className="slider round"></span>
        </label>
      </div>
    )
  }
}
