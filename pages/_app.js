import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'

import Header from 'components/Header'
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
// import Navigation from './components/Navigation';

const theme = {
    colors: {
        primary: '#ff0000'
    }
}

function MyApp({ Component, pageProps }) {
    return (
        <>
        <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
  
  export default MyApp
   
//   class App extends Component {
//     render() {
//       return (      
//          <BrowserRouter>
//           <div>
//             <Navigation />
//               <Switch>
//                <Route path="/" component={Home} exact/>
//                <Route path="/about" component={About}/>
//                <Route path="/contact" component={Contact}/>
//               <Route component={Error}/>
//              </Switch>
//           </div> 
//         </BrowserRouter>
//       );
//     }
//   }
   
//   export default App;