import React, { Component } from 'react'
import ReactQueryParams from 'react-query-params'

import TopSection from './components/TopSection/TopSection'
import MidSection from './components/MidSection/MidSection'
import Page from './pages/Page'

// Pages
import * as Pages from './pages'

export default class App extends ReactQueryParams {
    render() {
        return (
            <div className='App'>
                <TopSection {...this.props} />

                <MidSection {...this.props} />
            </div>
        )
    }
}
