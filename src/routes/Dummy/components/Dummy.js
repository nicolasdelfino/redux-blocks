import React from 'react'
import './DummyView.scss'

import { IndexLink } from 'react-router'
import Button from '../../../components/Buttons/Button'
import Blocks from '../containers/BlockContainer'

require('velocity-animate');
require('velocity-animate/velocity.ui');
var VelocityComponent = require('../../../velocity/velocity-component');
var VelocityTransitionGroup = require('../../../velocity/velocity-transition-group');

class Dummy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        isRunning: false,
        speed: 100,
        modules: [this.getRandomModule()]
    }

    this.interval = null;
  }

  buttonClicked (action) {
    switch (action) {
      case 'add':
        this.addModule()
      break;
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
    let active = Math.floor(Math.random() * 224) + 1
    this.props.dispatch({ type: 'SET_ACTIVE_BLOCK', payload: active })
  }

  getRandomModule() {
    const MAX = 12
    const MIN = 5
    let blockR =  Math.floor(Math.random()*(MAX-MIN+1)+MIN);
    console.log('val', blockR)
    let blockRandom = blockR.toString() + 'px';

    return <Blocks key={Math.floor(Math.random() * 10000000)} color={this.getRandomColor()} blockWidth={blockRandom} containerWidth='560px' total={224} />
  }

  getRandomColor() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  addModule() {
    let modules = this.state.modules;
    modules.push(this.getRandomModule())
    this.setState({
      modules: modules
    })
  }

  /*
  * Renders latest component with a velocity animation
  */
  renderModules() {
    let on = 0
    let modulesLength = this.state.modules.length

    return this.state.modules.map((block) => {
      on++;
      if(on === modulesLength) {
        return (
          <VelocityTransitionGroup
            runOnMount={true}
            key={Math.floor(Math.random() * 10000000)}
            enter={{animation: 'fadeIn', duration: 300}}>
              <div className='blockContainer' key={Math.floor(Math.random() * 10000000)} style={{padding:10, border:'1px solid #343434', marginTop: 10}}>
                #{on} {block}
              </div>
            </VelocityTransitionGroup>
        )
      }
      return <div className='blockContainer' key={Math.floor(Math.random() * 10000000)} style={{padding:10, border:'1px solid #343434', marginTop: 10}}>
        #{on} {block}
      </div>
    })
  }

  render () {
    return (
      <div>
        <div className='blocker'>
          <div className='btn' style={{display: 'inline-block', borderRadius: 2, padding: 5, width: 100, textAlign: 'center', marginRight: 10, backgroundColor: '#212121'}} onClick={() => this.buttonClicked('add')}>
            add module
          </div>
          <div className='btn' style={{display: 'inline-block', borderRadius: 2, padding: 5, width: 100, textAlign: 'center', marginRight: 10, backgroundColor: '#212121'}} onClick={() => this.buttonClicked('go')}>
            go
          </div>
          <div className='btn' style={{display: 'inline-block', borderRadius: 2, padding: 5, width: 100, textAlign: 'center', backgroundColor: '#212121'}} onClick={() => this.buttonClicked('stop')}>
            stop
          </div>

          {this.renderModules()}

          <p>active block: {this.props.activeBlock}</p>

        </div>
      </div>
    )
  }
}

export default Dummy
