import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseComponent from '../components/component';


export const urls = {
    index: {
        path: '/'
    }
};

export default (
    <Route>
        <Route path={urls.index.path} component={BaseComponent} />
    </Route>
);
