import React from 'react'
import { Container } from './AttractionsList.styles'

const AttractionsList = ({ data }) => {
  return (
    <Container key={data.id}>
      <img src={data.coverImageUrl} alt="thumbnail" />
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div>
          <span>star: {data.reviews.averageRating}</span>
          <span>count : {data.reviews.count}</span>
        </div>
        <span>{data.like.count}</span>
      </div>
    </Container>
  )
}

export default AttractionsList
