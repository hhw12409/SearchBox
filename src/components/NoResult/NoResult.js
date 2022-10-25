import React from 'react'
import noResult from '../../assets/image/no-result.svg'
import { Container, Wrapper } from '../../pages/Home'
import SearchBox from '../SearchBox/SearchBox'
import { FlexWrapper } from './NoResult.styles'

const NoResult = ({ value, onChange, scroll, onSubmit, onClick }) => {
  return (
    <Container>
      <SearchBox
        value={value}
        onChange={onChange}
        scroll={scroll}
        onSubmit={onSubmit}
        onClick={onClick}
      />
      <Wrapper>
        <FlexWrapper>
          <img src={noResult} alt="noResult" />
          <p>검색어에 맞는 관광지가 없어요.</p>
          <p>다른 검색어로 찾아보세요.</p>
        </FlexWrapper>
      </Wrapper>
    </Container>
  )
}

export default NoResult
