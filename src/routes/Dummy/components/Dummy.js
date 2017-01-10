import React from 'react'
import './DummyView.scss'

import { IndexLink } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Blocks from '../containers/BlockContainer'

class Dummy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        isRunning: false,
        speed: 100
    }

    this.interval = null;
  }

  buttonClicked (action) {
    switch (action) {
      case 'go':
        if(!this.state.isRunning) {
          this.setState({isRunning: true})
          this.interval = setInterval(() => {
            this.setRandomItem()
          }, this.state.speed);
        }
        break;
      case 'stop':
        this.clear();
        break;
      default:
        this.clear();
    }
  }

  clear() {
    clearInterval(this.interval)
    this.setState({isRunning: false})
  }

  setRandomItem() {
    let active = Math.floor(Math.random() * 300) + 1
    this.props.dispatch({ type: 'SET_ACTIVE_BLOCK', payload: active })
  }

  render () {
    return (
      <div>
        <div className='blocker'>
          <div style={{display: 'inline-block', borderRadius: 2, padding: 5, width: 100, textAlign: 'center', marginRight: 10, backgroundColor: '#212121'}} onClick={() => this.buttonClicked('go')}>
            go
          </div>
          <div style={{display: 'inline-block', borderRadius: 2, padding: 5, width: 100, textAlign: 'center', backgroundColor: '#212121'}} onClick={() => this.buttonClicked('stop')}>
            stop
          </div>

          <Blocks blockWidth='15px' total={224}/>
          <Blocks color='#ff4141' containerWidth='560px' total={224}/>
          <Blocks color='#61ff41' containerWidth='500px' total={224}/>
          <Blocks color='#f041ff' blockWidth='8px' containerWidth='224px' total={224}/>

          <p>active block: {this.props.activeBlock}</p>

        </div>
      </div>
    )
  }
}

export default Dummy
