import React from 'react'
import IconStar from '../@icons/IconStar/IconStar'
import { Container, BackStarsDiv, FrontDiv } from './Starts.styles'

const Stars = ({ stars }) => {
  let rating = 0

  if (stars) {
    rating = (((Math.round((stars * 10) / 5) * 5) / 10) * 20).toString() + '%'
  }

  return (
    <Container>
      <BackStarsDiv>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <FrontDiv rating={rating}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </FrontDiv>
      </BackStarsDiv>
    </Container>
  )
}

export default Stars
