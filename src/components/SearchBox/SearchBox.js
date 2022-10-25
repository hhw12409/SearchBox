import glass from '../../assets/image/glass.svg'
import close from '../../assets/image/close.svg'
import { Container } from './SearchBox.styles'

const SearchBox = ({ value, onChange, scroll, onSubmit, onClick }) => {
  return (
    <Container scroll={scroll} onSubmit={onSubmit}>
      <img src={glass} alt="search" />
      <input placeholder="검색" value={value} onChange={onChange} />
      {value ? <img src={close} alt="close" onClick={onClick} /> : null}
    </Container>
  )
}

export default SearchBox
