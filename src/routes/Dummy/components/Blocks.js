import React from 'react'

export default class Blocks extends React.Component {
  constructor(props) {
    super(props)
    this.blockWidth = this.props.blockWidth || 10
    this.blockHeight = this.blockWidth
    this.containerWidth = this.props.containerWidth || 560;
    this.totalBlocks = this.props.total || 200
    this.light = this.props.color || '#ffec6f'
  }

  isNeighbour(a, b) {
    let d = Math.floor(this.containerWidth / (this.blockWidth));
    var itemsperrow = Math.floor(this.containerWidth/ this.blockWidth);
    var rowOfItemA = Math.ceil(a / itemsperrow )
    var rowOfItemB = Math.ceil(b / itemsperrow )

    if(b === a - d || b === a + d){
      if(rowOfItemA != rowOfItemB) {
        return true;
      }
    }
    else if(b === a - 1 || b === a + 1) {
      if(rowOfItemA === rowOfItemB) {
        return true;
      }
    }
    return false;
  }

  setColorBasedOnProps(index) {
      let { activeBlock } = this.props

      if(activeBlock === index ) {
        return this.light
      }
      else if(this.isNeighbour(activeBlock, index)){
        return '#656044';
      }
      let c = Math.floor(Math.random() * 2) + 1
      return c === 1 ? '#222222' : '#1f1f1f'
  }

  blockClick(item) {
    console.log('item', item)
    this.props.dispatch({ type: 'SET_ACTIVE_BLOCK', payload: item })
  }

  getBlocks() {
    let _r = []
    for (var i = 0; i < this.totalBlocks; i++) {
      let item = i + 1
      _r.push(
        <div key={i} style={{flex:1, width: this.blockWidth, height: this.blockHeight, backgroundColor: this.setColorBasedOnProps(i+1), display:'inline-block', textAlign:'center'}} onClick={() => this.blockClick(item)}>
          <p style={{color:'#b6b6b6', padding:0, margin:0, justifyContent: 'center', fontSize:8}}></p>
        </div>
      )
    }
    return _r;
  }

  render() {
    return (
      <div style={{lineHeight: 0, width: this.containerWidth, marginTop:10}}>
      {this.getBlocks()}
      </div>
    )
  }
}
