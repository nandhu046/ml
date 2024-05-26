import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`

export const CourseContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  flex-wrap: wrap;
`

export const Image = styled.img`
  width: 35%;
  height: 290px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 30px;
  font-family: 'Roboto';
`

export const Name = styled.h1`
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Description = styled.p`
  color: #475569;
  font-size: 16px;
  line-height: 1.4;
  margin: 0px;
  margin-bottom: 30px;
`
