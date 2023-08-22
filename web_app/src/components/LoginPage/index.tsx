import React from 'react';
import './login-page.scss';
import LoginForm from './LoginForm'

function LoginPage() {

    const onSubmit = async () => {
        /* const is_valid_user = await userAuth(values)
         * if (is_valid_user) {
         *     routerHistory.push('/my-dashboard')
         * } */
    }

    return (
        <div className="login-page">
          <div className="login-page__box">
            <div className="login-page__logo"> 
              {/* <img src={}
                  alt="logo" /> */}
            </div>
            <div className="login-page__form"> 
              <LoginForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
    );
}

export default LoginPage;
