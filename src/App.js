import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from './components/PasswordItem'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    passwordList: [],
    website: '',
    username: '',
    password: '',
    isActive: false,
  }

  deleteItem = id => {
    const {passwordList} = this.state
    const filteredPasswordList = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: filteredPasswordList})
  }

  renderPasswordList = () => {
    const {passwordList, searchInput, isActive} = this.state
    const searchResults = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchResults)
    if (passwordList.length === 0) {
      return (
        <div className="no-passwords-container">
          <img
            className="no-passwords-image"
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="no-passwords-text">No Passwords</p>
        </div>
      )
    }
    if (searchResults.length === 0) {
      return (
        <div className="no-passwords-container">
          <img
            className="no-passwords-image"
            alt="no passwords"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          />
          <p className="no-passwords-text">No Passwords</p>
        </div>
      )
    }

    return (
      <ul className="list-item-container">
        {searchResults.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            itemDetails={eachItem}
            isActive={isActive}
            deleteItem={this.deleteItem}
          />
        ))}
      </ul>
    )
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const addPassword = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, addPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onToggleActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {searchInput, passwordList} = this.state

    const {website, username, password} = this.state
    return (
      <div className="bg-container">
        <img
          className="password-manager-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="card-container">
          <div className="top-card">
            <img
              className="password-manager-small"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <form className="form-container" onSubmit={this.onAddPassword}>
              <h1 className="add-password-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  className="icons"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  onChange={this.onChangeWebsite}
                  placeholder="Enter Website"
                  value={website}
                  className="input-element"
                  type="text"
                />
              </div>
              <div className="input-container">
                <img
                  className="icons"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                  className="input-element"
                  type="text"
                />
              </div>
              <div className="input-container">
                <img
                  className="icons"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                  className="input-element"
                  type="password"
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div>
              <img
                className="password-manager-large"
                alt="password manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              />
            </div>
          </div>
          <div className="bottom-card">
            <div className="bottom-container-nav">
              <div className="passwords-count-container">
                <h1 className="your-passwords">Your Passwords</h1>
                <p className="passwords-number">{passwordList.length}</p>
              </div>
              <div className="search-container">
                <img
                  className="icons"
                  alt="search"
                  placeholder="Search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                  className="search-input-element"
                  type="search"
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="checkbox-icon">
              <input
                onClick={this.onToggleActive}
                className="check-box"
                id="showPasswords"
                type="checkbox"
              />
              <label className="label" htmlFor="showPasswords">
                Show Passwords
              </label>
            </div>
            <div>{this.renderPasswordList()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
