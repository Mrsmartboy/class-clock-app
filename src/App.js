import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClock: false}

  onClickToggle = () => {
    this.setState(prevState => ({isClock: !prevState.isClock}))
  }

  render() {
    const {isClock} = this.state
    const text = isClock ? 'Hide Clock' : 'Show Clock'
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickToggle}
        >
          {text}
        </button>
        {isClock && <Clock />}
      </div>
    )
  }
}

export default App
