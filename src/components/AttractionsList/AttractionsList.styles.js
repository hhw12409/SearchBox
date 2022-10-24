import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-bottom: 32px;
  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  img {
    margin-right: 16px;
    width: 92px;
    height: 120px;
    border-radius: 10px;
  }
`

export { Container }
