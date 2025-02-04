import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'
function Slideshow({ galleryImages }) {
  const [index, setIndex] = useState(0)

  const goToPrevious = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <div className="slideshow">
      <button
        className="slideshow__button slideshow__button--prev"
        onClick={goToPrevious}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="slideshow__icon" />
      </button>
      <img
        className="slideshow__image"
        src={galleryImages[index]}
        alt={`Slide ${index + 1}`}
      />
      <span className="slideshow__indicator">{`${index + 1}/${
        galleryImages.length
      }`}</span>
      <button
        className="slideshow__button slideshow__button--next"
        onClick={goToNext}
      >
        <FontAwesomeIcon icon={faChevronRight} className="slideshow__icon" />
      </button>
    </div>
  )
}

Slideshow.propTypes = {
  galleryImages: PropTypes.array.isRequired,
}

export default Slideshow
