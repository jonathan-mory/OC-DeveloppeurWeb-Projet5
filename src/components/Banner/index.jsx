import React from 'react'
import PropTypes from 'prop-types'
function Banner({ children, imageUrl }) {
  const childrenWithClass = React.Children.map(children, (child) => {
    return React.cloneElement(child, { className: 'banner__title' })
  })

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className="banner">
      {childrenWithClass}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string.isRequired,
}

export default Banner
