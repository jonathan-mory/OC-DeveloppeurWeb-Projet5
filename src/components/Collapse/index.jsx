import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'
import './Collapse.scss'
import { useLocation } from 'react-router'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <div
      className={`${
        location.pathname === '/' || location.pathname === '/about'
          ? 'collapse--large'
          : 'collapse--medium'
      } ${isOpen ? 'collapse--open' : 'collapse--closed'}`}
    >
      <div className="collapse__header">
        <span className="collapse__title">{title}</span>
        <button
          className={`collapse__button ${
            isOpen ? 'collapse__button--open' : 'collapse__button--closed'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Voir plus"
          type="button"
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className={
              isOpen
                ? ' collapse__icon collapse__icon--open'
                : 'collapse__icon collapse__icon--closed'
            }
          />
        </button>
      </div>
      <div className="collapse__content">{children}</div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Collapse
