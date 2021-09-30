import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import {AddPage} from './pages/AddPage'
import {HomePage} from "./pages/HomePage";

export const  useRoutes = () => {

    return (
        <Switch>
            <Route path='/order' exact>
                <AddPage/>
            </Route>
            <Route path='/' exact>
                <HomePage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}