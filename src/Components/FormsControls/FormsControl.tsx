import React from 'react';
import s from '../../styles/FormControls.module.css';
import {WrappedFieldProps} from "redux-form";

//это пропсы, которые я передаю
export type CustomFieldProps = {
    placeholder?: string,
    type?: string,
    children: React.ReactNode
}

export const FormControl = ({input, meta, children, ...props}: WrappedFieldProps & CustomFieldProps) => {
    const styles = `${s.formControl}  ${meta.touched && meta.error ? s.error : ''}`;

    return (
        <div className={styles}>
            <div>
                {children}
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props: WrappedFieldProps & CustomFieldProps) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: WrappedFieldProps & CustomFieldProps) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}


