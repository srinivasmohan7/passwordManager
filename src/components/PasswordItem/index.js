import './index.css'

const PasswordItem = props => {
  const {itemDetails, isActive, deleteItem} = props
  const {website, username, password, id} = itemDetails

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="list-text-item">
        <h1 className="profile-pic">{website[0]}</h1>
        <div className="details-con">
          <p className="name">{website}</p>
          <p className="name">{username}</p>
          {isActive ? (
            <p className="name">{password}</p>
          ) : (
            <img
              className="stars"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>
      <button
        onClick={onDelete}
        className="button"
        type="button"
        testid="delete"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItem
