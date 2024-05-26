import {FailContainer, Heading, Image, Para, Button} from './styles'

const FailureView = props => {
  const {retryFun} = props

  const onClickRetryBtn = () => {
    retryFun()
  }

  return (
    <FailContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para>We cannot seem to find the page you are looking for.</Para>
      <Button onClick={retryFun}>Retry</Button>
    </FailContainer>
  )
}

export default FailureView
