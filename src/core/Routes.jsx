import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from '../create/Create'
import PrivateRoute from './PrivateRoute'
import NonPrivateRoute from './NonPrivateRoute'

const NotFound = () => <div>Not found man</div>

const Dashboard = () => <div>Dashboard</div>

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
        {/* <AuthenticatedRoute
      path="/search/:type"
      exact={false}
      component={Search}
      authenticated={authenticated}
    /> */}
        <Route component={NotFound} />
    </Switch>
)

export default Routes