import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './Card.scss'
function Card({ title, coverUrl, id }) {
  return (
    <Link to={`/accommodation/${id}`} className="card__link">
      <article className="card">
        <img src={coverUrl} alt={title} className="card__image" />
        <span className="card__title">{title}</span>
      </article>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Card
