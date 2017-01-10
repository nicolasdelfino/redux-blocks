import { connect } from 'react-redux'
import Dummy from '../components/Dummy'

const mapStateToProps = (state) => ({
  dummyText : state.dummy.dummyText,
  showBar: state.dummy.dummyVal,
  activeBlock: state.dummy.activeBlock
})

export default connect(mapStateToProps, null)(Dummy)
