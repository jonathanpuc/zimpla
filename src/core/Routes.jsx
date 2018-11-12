import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Create from '../create/Create'
import Dashboard from './Dashboard'
import Group from '../group/Group'
import PrivateRoute from './PrivateRoute'
import NonPrivateRoute from './NonPrivateRoute'

const NotFound = () => <Redirect to='/' />


const Routes = () => (
    <Switch>
        <PrivateRoute
            path="/"
            exact={true}
            component={Dashboard}
        />
        <NonPrivateRoute
            path="/create"
            exact={false}
            component={Create}
        />
        <PrivateRoute
            path="/g/:id"
            exact={false}
            component={Group}
        />
        <Route component={NotFound} />
    </Switch>
)

export default Routes