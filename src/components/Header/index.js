import {Link} from 'react-router-dom'
import {Navbar, WebLogo} from './styles'

const Header = () => (
  <Navbar>
    <Link to="/">
      <WebLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Navbar>
)

export default Header
