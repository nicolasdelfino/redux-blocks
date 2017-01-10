import { connect } from 'react-redux'
import { personListAsync, clearList, runSagaFetch, clearAlbumList } from '../modules/PersonListReducer'
import PersonList from '../components/PersonList'

const mapStateToProps = (state) => ({
  users: state.personlist.users,
  albums: state.personlist.albums
})

const mapDispatchToProps = {
  loadPersons : () => personListAsync(),
  clear : () => clearList(),
  goSaga: () => runSagaFetch(),
  clearAlbums: () => clearAlbumList()
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
