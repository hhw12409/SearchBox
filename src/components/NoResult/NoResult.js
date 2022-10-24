import React from 'react'
import noResult from '../../assets/image/no-result.svg'
import { Container, Wrapper } from '../../pages/Home'
import SearchBox from '../SearchBox/SearchBox'
import { FlexWrapper } from './NoResult.styles'

const NoResult = ({ value, onChange, scroll, onSubmit }) => {
  return (
    <Container>
      <SearchBox
        value={value}
        onChange={onChange}
        scroll={scroll}
        onSubmit={onSubmit}
      />
      <Wrapper>
        <FlexWrapper>
          <img
            src={noResult}
            alt="noResult"
            style={{ width: 66, height: 53, marginBottom: 20 }}
          />
          <p>검색어에 맞는 관광지가 없어요.</p>
          <p>다른 검색어로 찾아보세요.</p>
        </FlexWrapper>
      </Wrapper>
    </Container>
  )
}

export default NoResult
