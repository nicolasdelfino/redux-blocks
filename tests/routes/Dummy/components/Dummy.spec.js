import React from 'react'
import { bindActionCreators } from 'redux'
import Dummy from 'routes/Dummy/components/Dummy'
import { shallow } from 'enzyme'

describe('(Component) Dummy', () => {
  let _props, _spies, _wrapper

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

  describe('A monkey button...', () => {
    let _button

    beforeEach(() => {
      // let buttonComponent = _wrapper.find('Button')
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'set redux dummy to monkey')
    })

    it('Should dispatch a `setText` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.setText.should.have.been.called
    })
  })

  describe('A cat button...', () => {
    let _button

    beforeEach(() => {
      // let buttonComponent = _wrapper.find('Button')
      _button = _wrapper.find('button').filterWhere(a => a.text() === 'set redux dummy to cat')
    })

    it('Should dispatch a `setText` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      _button.simulate('click')

      _spies.dispatch.should.have.been.called
      _spies.setText.should.have.been.called
    })
  })
  //
  // describe('A toggle button...', () => {
  //   let _button
  //
  //   beforeEach(() => {
  //     _button = _wrapper.find('button').filterWhere(a => a.text() === 'toggle')
  //   })
  //
  //   it('Should dispatch a `toggle` action when clicked', () => {
  //     _spies.dispatch.should.have.not.been.called
  //
  //     _button.simulate('click')
  //
  //     _spies.dispatch.should.have.been.called
  //     _spies.toggle.should.have.been.called
  //   })
  // })
})
