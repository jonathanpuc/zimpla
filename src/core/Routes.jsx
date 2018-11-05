import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from '../create/Create'
import Dashboard from './Dashboard'
import Group from '../group/Group'
import PrivateRoute from './PrivateRoute'
import NonPrivateRoute from './NonPrivateRoute'

const NotFound = () => <div>Not found man</div>


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