import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  Container,
  CourseContainer,
  Image,
  Content,
  Description,
  Name,
} from './styles'

class CourseItemDetails extends Component {
  state = {apiStatus: 'INITIAL', data: ''}

  componentDidMount() {
    this.getCourseDetails()
  }

  onRetry = () => {
    this.setState({apiStatus: 'INITIAL'}, this.getCourseDetails)
  }

  getCourseDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const responseObj = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    if (responseObj.ok === true) {
      const data = await responseObj.json()
      const d = data.course_details
      const newObj = {
        id: d.id,
        name: d.name,
        imageUrl: d.image_url,
        description: d.description,
      }
      this.setState({apiStatus: 'SUCCESS', data: newObj})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderOnStatus = () => {
    const {apiStatus, data} = this.state
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
          <CourseContainer>
            <Image src={data.imageUrl} alt={data.name} />
            <Content>
              <Name>{data.name}</Name>
              <Description>{data.description}</Description>
            </Content>
          </CourseContainer>
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

export default CourseItemDetails
