import React from 'react'
import { Container, Wrapper } from '../../pages/Home'
import SearchBox from '../SearchBox/SearchBox'
import {
  ThumbnailSkeloton,
  TitleSkeloton,
  ContentSkeloton,
  SubContentSkeloton,
  FlexBox,
} from './Skeleton.styles'

const Skeleton = ({ value, onChange, scroll, onSubmit }) => {
  return (
    <Container>
      <SearchBox
        value={value}
        onChange={onChange}
        scroll={scroll}
        onSubmit={onSubmit}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <Wrapper key={i}>
          <FlexBox>
            <ThumbnailSkeloton />
            <div>
              <TitleSkeloton />
              <ContentSkeloton />
              <SubContentSkeloton />
            </div>
          </FlexBox>
        </Wrapper>
      ))}
    </Container>
  )
}

export default Skeleton
