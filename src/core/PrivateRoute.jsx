import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export default class PrivateRoute extends React.Component {

    state = {
        loading: true,
        onboardingComplete: false
    }

    componentDidMount() {
        this.checkSession();
    }

    checkSession = () => {
        let cachedData = localStorage.getItem('zimpla-data') || false
        if (cachedData) {
            cachedData = JSON.parse(cachedData)

            if (cachedData.session.onboardingComplete) {
                this.setState({ loading: false, onboardingComplete: true })
            } else {
                this.setState({ loading: false })
            }
        } else {
            this.setState({ loading: false })
        }
    }


    render() {
        const { component: Component, ...rest } = this.props;
        const { loading, onboardingComplete } = this.state;
        if (loading) {
            return null
        } else {
            return (
                <Route
                    {...rest}
                    render={props => {
                        return onboardingComplete ? (
                            <Component {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/create"
                                    }}
                                />

                            );
                    }}
                />
            );
        }

    }
}
