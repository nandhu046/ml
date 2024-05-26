import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem'
import FailureView from '../FailureView'
import Header from '../Header'
import {Container, CourseContainer, Heading} from './styles'

class Home extends Component {
  state = {apiStatus: 'INITIAL', courses: []}

  componentDidMount() {
    this.getCourses()
  }

  onRetry = () => {
    this.setState({apiStatus: 'INITIAL'}, this.getCourses)
  }

  getCourses = async () => {
    const responseObj = await fetch('https://apis.ccbp.in/te/courses')
    if (responseObj.ok === true) {
      const data = await responseObj.json()
      this.setState({apiStatus: 'SUCCESS', courses: data.courses})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderOnStatus = () => {
    const {apiStatus, courses} = this.state
    switch (apiStatus) {
      case 'INITIAL':
        return (
          <Container>
            <div content="center" data-testid="loader">
              <Loader type="ThreeDots" height="50" width="50" />
            </div>
          </Container>
        )

      case 'SUCCESS':
        return (
          <>
            <Heading>Courses</Heading>
            <CourseContainer>
              {courses.map(i => (
                <CourseItem key={i.id} data={i} />
              ))}
            </CourseContainer>
          </>
        )

      default:
        return (
          <Container>
            <FailureView retryFun={this.onRetry} />
          </Container>
        )
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderOnStatus()}
      </>
    )
  }
}

export default Home
