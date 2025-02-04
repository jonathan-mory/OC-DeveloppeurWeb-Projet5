import PropTypes from 'prop-types'
function Profile({ hostName, hostPicture }) {
  return (
    <div className="profile">
      <span className="profile__name">{hostName}</span>
      <img
        src={hostPicture}
        alt={`Portrait de ${hostName}`}
        className="profile__image"
      />
    </div>
  )
}

Profile.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string,
}

export default Profile
