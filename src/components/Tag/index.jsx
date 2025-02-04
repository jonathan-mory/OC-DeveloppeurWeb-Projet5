import PropTypes from 'prop-types'

function Tag({ tagName }) {
  return <span className="tag">{tagName}</span>
}

Tag.propTypes = {
  tagName: PropTypes.string,
}

export default Tag
