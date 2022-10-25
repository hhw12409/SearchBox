import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Globalstyle = createGlobalStyle`
  ${reset}
  body {
    width: 450px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default Globalstyle
