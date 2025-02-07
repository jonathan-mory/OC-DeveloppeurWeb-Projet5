import DarkLogo from '../../assets/images/logo_kasa_dark.png'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__image" src={DarkLogo} alt="Logo de Kasa" />
      <span className="footer__text">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
