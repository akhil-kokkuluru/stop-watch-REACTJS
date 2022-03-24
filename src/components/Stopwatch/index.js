import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0, timerRunnig: false}

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  onStopClick = () => {
    clearInterval(this.timeInterval)
    this.setState({timerRunnig: false})
  }

  onresetClick = () => {
    clearInterval(this.timeInterval)
    this.setState({seconds: 0, timerRunnig: false})
  }

  startTimer = () => {
    this.setState(prevValue => ({seconds: prevValue.seconds + 1}))
  }

  startTimeInterval = () => {
    this.timeInterval = setInterval(this.startTimer, 1000)
    this.setState({timerRunnig: true})
  }

  renderSeconds = () => {
    const {seconds} = this.state
    const secondsValue = Math.floor(seconds % 60)
    if (secondsValue < 9) {
      return `0${secondsValue}`
    }
    return secondsValue
  }

  renderMinutes = () => {
    const {seconds} = this.state
    const MinutesValue = Math.floor(seconds / 60)
    if (MinutesValue < 10) {
      return `0${MinutesValue}`
    }
    return MinutesValue
  }

  render() {
    const timerValue = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <h1 className="heading">Stopwatch</h1>
          <div className="timerBg">
            <div className="imgHeadingContainer">
              <img
                alt="stopwatch"
                className="timerLogo"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timerCss">Timer</p>
            </div>
            <h1 className="time">{timerValue}</h1>
            <div className="buttonsContainer">
              <button
                type="button"
                className="startButton"
                onClick={this.startTimeInterval}
              >
                Start
              </button>
              <button
                type="button"
                className="stopButton"
                onClick={this.onStopClick}
              >
                Stop
              </button>
              <button
                type="button"
                className="resetButton"
                onClick={this.onresetClick}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
