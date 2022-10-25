import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

const BackStarsDiv = styled.div`
  display: flex;
  position: relative;
  color: #d3d3d3;
`

const FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${props => props.rating};
  color: #ffbc0b;
`
export { Container, BackStarsDiv, FrontDiv }
