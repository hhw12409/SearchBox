import React, { memo, useCallback, useState } from 'react'
import { Container } from './AttractionsList.styles'
import lineHeart from '../../assets/image/line-heart.svg'
import fillHeart from '../../assets/image/fill-heart.svg'
import API from '../../apis/apis'
import { useQuery } from '@tanstack/react-query'

const AttractionsList = ({ data, index }) => {
  const [fillLikeId, setFillLikeId] = useState('')
  const [lineLikeId, setLineLikeId] = useState('')
  const [isLike, setIsLike] = useState(data.like.isLiked)

  useQuery(['likeId', fillLikeId], API.editAttractionLike, {
    enabled: !!fillLikeId,
  })
  useQuery(['likeId', lineLikeId], API.deleteAttractionLike, {
    enabled: !!lineLikeId,
  })

  const handleLikeClick = useCallback(e => {
    if (e.target.className === 'fillHeart') {
      setLineLikeId(e.target.id)
      setIsLike(prev => !prev)
    }
    if (e.target.className === 'lineHeart') {
      setFillLikeId(e.target.id)
      setIsLike(prev => !prev)
    }
  }, [])

  return (
    <Container>
      <img src={data.coverImageUrl} alt="thumbnail" />
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div>
          <span>{Math.ceil(data.reviews.averageRating * 2) / 2}</span>
          <span>({data.reviews.count > 99 ? '99+' : data.reviews.count})</span>
        </div>
        <span>{data.like.count > 999 ? '999+' : data.like.count}</span>
        <img
          onClick={handleLikeClick}
          id={data.id}
          className={isLike ? 'fillHeart' : 'lineHeart'}
          src={isLike ? fillHeart : lineHeart}
          alt="Heart"
          style={{ width: 20, height: 20 }}
        />
      </div>
    </Container>
  )
}

export default memo(AttractionsList)
