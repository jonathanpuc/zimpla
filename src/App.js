import React from 'react';
import Header from './core/Header'
import Create from './create/Create'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    orange: '#FFA722'
  }
}

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Create />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

