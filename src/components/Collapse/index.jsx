import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Collapse.scss'
function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentElementRef = useRef(null)

  useEffect(() => {
    const tempMaxHeight = contentElementRef.current.style.maxHeight
    contentElementRef.current.style.maxHeight = 'none'
    setHeight(contentElementRef.current.scrollHeight)
    contentElementRef.current.style.maxHeight = tempMaxHeight
  }, [contentElementRef])

  const maxHeight = useMemo(() => {
    return isOpen ? height : 0
  }, [isOpen, height])

  return (
    <div
      className={`collapse ${isOpen ? 'collapse--open' : 'collapse--closed'}`}
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
                ? 'collapse__icon collapse__icon--open'
                : 'collapse__icon collapse__icon--closed'
            }
          />
        </button>
      </div>
      <div
        className="collapse__content"
        ref={contentElementRef}
        style={{ maxHeight }}
      >
        <div className="collapse__content__text">{children}</div>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Collapse
