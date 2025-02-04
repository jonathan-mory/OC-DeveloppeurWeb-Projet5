import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import './Ratings.scss'

function Ratings({ currentRating }) {
  const ratings = [1, 2, 3, 4, 5]
  return (
    <div className="ratings">
      {ratings.map((rating, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          color={currentRating >= rating ? '#ff6060' : '#e3e3e3'}
          className="ratings__icon"
        />
      ))}
    </div>
  )
}

Ratings.propTypes = {
  currentRating: PropTypes.number.isRequired,
}

export default Ratings
