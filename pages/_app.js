import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'

import Header from 'components/Header'

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