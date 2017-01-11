import React from 'react'
import { bindActionCreators } from 'redux'
import Dummy from 'routes/Dummy/components/Dummy'
import Blocks from 'routes/Dummy/components/Blocks'
import { shallow, mount } from 'enzyme'

describe('(Component) Dummy', () => {
  let _props, _spies, _wrapper
  let minBlocksProps = {
    key:0,
    color:'#FFF',
    blockWidth:10
  }

  beforeEach(() => {
    _spies = {}
    _props = {
      dummyText : 'default text',
      showBar: false,
      ...bindActionCreators({
        toggle : (_spies.toggle = sinon.spy()),
        setText   : (_spies.setText = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Dummy {..._props} />)
  })

  it('Should render as a <div>', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should have 3 buttons', () => {
    expect(_wrapper.find('.btn')).to.have.length(3)
  })
})
