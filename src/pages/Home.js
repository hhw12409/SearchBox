import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import API from '../apis/apis'
import { useQuery } from '@tanstack/react-query'
import SearchBox from '../components/SearchBox/SearchBox'
import AttractionsList from '../components/AttractionsList/AttractionsList'
import Skeleton from '../components/Skeleton/Skeleton'
import NoResult from '../components/NoResult/NoResult'

const Home = () => {
  const [scroll, setScroll] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSeachValue] = useState('')

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const handleChangeSearchValue = e => {
    setInputValue(e.target.value)
  }

  const clearSearchValue = () => {
    setInputValue('')
  }

  const handleValueSubmit = e => {
    e.preventDefault()
    setSeachValue(inputValue)
  }

  const { data, isLoading } = useQuery(
    ['attractions', searchValue],
    API.getAttraction,
    {
      retryDelay: 1000,
    },
  )

  if (isLoading) {
    return (
      <Skeleton
        isLoading={isLoading}
        data={data}
        value={inputValue}
        onChange={handleChangeSearchValue}
        scroll={scroll}
        onSubmit={handleValueSubmit}
      />
    )
  }

  return data.length > 0 ? (
    <Container>
      <SearchBox
        value={inputValue}
        onChange={handleChangeSearchValue}
        scroll={scroll}
        onSubmit={handleValueSubmit}
        onClick={clearSearchValue}
      />
      <Wrapper>
        {data.map((i, index) => (
          <AttractionsList data={i} key={i.id} index={index} />
        ))}
      </Wrapper>
    </Container>
  ) : (
    <NoResult
      value={inputValue}
      onChange={handleChangeSearchValue}
      scroll={scroll}
      onSubmit={handleValueSubmit}
      onClick={clearSearchValue}
    />
  )
}

export default Home

const Container = styled.div`
  height: 200vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Wrapper = styled.div`
  margin-top: 100px;
  padding: 0px 16px;
`

export { Container, Wrapper }
