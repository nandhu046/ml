import {Li, Name, Image, LinkItem} from './styles'

const CourseItem = props => {
  const {data} = props
  const newDataObj = {
    id: data.id,
    name: data.name,
    logoUrl: data.logo_url,
  }
  const {id, name, logoUrl} = newDataObj

  return (
    <LinkItem to={`/courses/${id}`}>
      <Li>
        <Image src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Li>
    </LinkItem>
  )
}

export default CourseItem
