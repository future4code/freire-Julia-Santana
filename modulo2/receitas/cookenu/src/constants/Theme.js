import { createTheme } from '@material-ui/core/styled';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {primeiraCor, segundaCor, corBotao, texto} from "./Color";
import {createMuiTheme} from ''

const theme = createTheme({
  palette: {
    primary: {
      main: primeiraCor,
    },
    secondary: {
      main:segundaCor,
    },

    botoes: {
        main:corBotao,
      },

      text: {
        main:texto,
      },
  },
});

export default theme
