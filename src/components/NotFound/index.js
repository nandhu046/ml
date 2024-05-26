import Header from '../Header'
import {Container, Name, Description, Image} from './styles'

const NotFound = () => (
  <>
    <Header />
    <Container>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <Name>Page Not Found</Name>
      <Description>
        We are sorry, the page you requested could not be found.
      </Description>
    </Container>
  </>
)

export default NotFound
