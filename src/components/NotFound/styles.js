import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  font-family: 'Roboto';
`

export const Name = styled.h1`
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

export const Image = styled.img`
  width: 290px;
  height: 290px;
`
