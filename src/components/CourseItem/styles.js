import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const Li = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 20px;
`

export const Image = styled.img`
  height: 30px;
`
export const Name = styled.p`
  color: #000000;
  font-family: 'Roboto';
  margin: 0px;
  margin-left: 12px;
  font-size: 500;
  font-size: 18px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`
