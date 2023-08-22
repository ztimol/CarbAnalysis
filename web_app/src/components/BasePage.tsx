import React, { Fragment } from 'react';
import AuthRouter from './AuthRouter';
import NonAuthRouter from './NonAuthRouter';

function BasePage() {
    return (
        <Fragment>
          {/* <AuthRouter/>; */}
        <NonAuthRouter/>;
        </Fragment>
    );
}

export default BasePage;
