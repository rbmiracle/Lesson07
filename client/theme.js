import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightBlue } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#8eacbb',
      main: '#005dd0',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#00deff',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightBlue['400'],
      type: 'light'
    }
  })

  export default theme