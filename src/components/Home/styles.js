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

export const CourseContainer = styled.ul`
  padding: 30px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px;
  overflow-y: auto;
  flex-wrap: wrap;
  height: 100%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 0px;
`
