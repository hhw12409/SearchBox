import glass from '../../assets/image/glass.svg'
import { Container } from './SearchBox.styles'

const SearchBox = ({ value, onChange, scroll, onSubmit }) => {
  return (
    <Container scroll={scroll} onSubmit={onSubmit}>
      <img src={glass} alt="search" />
      <input placeholder="검색" value={value} onChange={onChange} />
    </Container>
  )
}

export default SearchBox
