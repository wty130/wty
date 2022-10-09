import React, { Component } from 'react'
import Move from './Move'
export default class App extends Component {
  state = {
    isShow: false
  }
  handleClick = () => {
    this.setState({ isShow: true })
    setTimeout(() => {
      this.setState({ isShow: false })
    }, 300)
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>点击开启遮罩层</button>
        {this.state.isShow ? <Move /> : <></>}
      </>
    )
  }
}
