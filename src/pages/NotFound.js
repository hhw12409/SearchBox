import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>없는 페이지 입니다.</h1>
      <Link to="/api/attractions">홈페이지로 돌아가기</Link>
    </div>
  )
}

export default NotFound
