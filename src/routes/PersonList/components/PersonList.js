import React from 'react'
import Button from '../../../components/Buttons/Button'

class PersonList extends React.Component {

  buttonClicked () {
    this.props.loadPersons()
  }

  clearList () {
    this.props.clear()
  }

  getUsers () {
    if (!this.props.users) {
      return <p>No users</p>
    }

    return this.props.users.map((user) => {
      return <p key={user.id}>{user.name} {user.email}</p>
    })
  }

  buttonSagaClicked () {
    this.props.goSaga()
  }

  getAlbums () {
    if (!this.props.albums) {
      return <p>No albums</p>
    }

    return this.props.albums.map((album) => {
      return <p key={album.id}>{album.title}</p>
    })
  }

  clearAlbumList () {
    this.props.clearAlbums()
  }

  render () {
    return (
      <div>
        <div className='blocker'>
          <h2>Person list, redux-thunk</h2>
          <Button text='load person list' clickHandler={() => this.buttonClicked()} />
          <Button text='clear list' clickHandler={() => this.clearList()} />
          <div>{this.getUsers()}</div>
        </div>
        <div className='blocker'>
          <h2>Album list, redux-sagas</h2>
          <Button text='load albums' clickHandler={() => this.buttonSagaClicked()} />
          <Button text='clear list' clickHandler={() => this.clearAlbumList()} />
          <div>{this.getAlbums()}</div>
        </div>
      </div>
    )
  }
}

PersonList.propTypes = {
  loadPersons   : React.PropTypes.func.isRequired,
  clear   : React.PropTypes.func.isRequired,
  goSaga   : React.PropTypes.func.isRequired
}

export default PersonList
