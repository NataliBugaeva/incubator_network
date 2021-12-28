import React from 'react';
import s from './Login.module.scss';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";


const Login = () => {
    const onSubmit = (formDate: FormDataType) => {
        console.log(formDate);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
    )
}

export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Input} name={'login'} placeholder={'Login'} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={'password'} placeholder={'Password'} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type="checkbox"/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

let LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default Login;
