import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Globalstyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default Globalstyle
