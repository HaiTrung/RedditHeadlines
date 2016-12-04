/**
 * Created by Hai Trung on 04/12/2016.
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
            <AsyncApp />
            </Provider>
        )
    }
}