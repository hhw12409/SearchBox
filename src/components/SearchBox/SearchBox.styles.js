import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 15px;
  position: fixed;
  background-color: white;
  box-shadow: ${props =>
    props.scroll ? '0px 2px 5px rgba(0, 0, 0, 0.2)' : null};
  img:first-child {
    position: absolute;
    padding: 10px;
  }
  input {
    width: 50vh;
    padding: 10px 36px;
    background-color: #f2f4f5;
    border: none;
    border-radius: 8px;
  }
`

export { Container }
