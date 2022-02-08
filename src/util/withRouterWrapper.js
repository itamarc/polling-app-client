import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component {...props} history={history} />;
    };

    return Wrapper;
}
