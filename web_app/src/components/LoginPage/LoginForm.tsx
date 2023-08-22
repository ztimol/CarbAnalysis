import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import TextInputFormField from '../TextInputFormField'
import { LoginFormProps } from './types';
import './login-form.scss';

function LoginForm(props: LoginFormProps) {

    const { onSubmit } = props;
    const { register, handleSubmit, formState } = useForm()
    //const { handleSubmit } = useForm() //<FormValues>({ resolver });

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form__input-block">
            <TextInputFormField
                name="username"
                className="mb-2"
                inputType="email"
                register={register}                
                placeholder="Email"
            />
            <TextInputFormField
                name="password"
                inputType="password"
                register={register}
                placeholder="Password"
            />
            <Link to="/reset-password" className="btn btn-sm btn-link pl-0 pt-0">
              Forgot Password
            </Link>
          </div>
          <div className="button_block">
          </div>
        </form>
    );
}

export default LoginForm;


{/* <button type="submit"
    disabled={isSubmitting}
    className={`btn btn-primary ${isSubmitting ? 'disabled': ''}`}>
    Sign In
    </button> */}


