import { connect } from 'react-redux'
import Blocks from '../components/Blocks'

const mapStateToProps = (state) => ({
  totalBlocks: state.dummy.totalBlocks,
  activeBlock: state.dummy.activeBlock
})

export default connect(mapStateToProps, null)(Blocks)
