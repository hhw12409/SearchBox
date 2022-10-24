import styled from 'styled-components'

const ThumbnailSkeloton = styled.div`
  width: 92px;
  height: 120px;
  background-color: #e3e5e6;
  border-radius: 8px;
  margin-right: 16px;
`

const TitleSkeloton = styled.div`
  width: 100px;
  height: 16px;
  border-radius: 9px;
  background-color: #e3e5e6;
  margin-bottom: 8px;
`

const ContentSkeloton = styled(TitleSkeloton)`
  width: 223px;
  height: 12px;
`

const SubContentSkeloton = styled(TitleSkeloton)`
  width: 143;
  height: 12px;
`

const FlexBox = styled.div`
  display: flex;
`

export {
  ThumbnailSkeloton,
  TitleSkeloton,
  ContentSkeloton,
  SubContentSkeloton,
  FlexBox,
}
