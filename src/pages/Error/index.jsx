import { Link } from 'react-router'

function Error() {
  return (
    <div className="error-container">
      <span className="error-container__title">404</span>
      <span className="error-container__description">
        Oups ! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="error-container__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
