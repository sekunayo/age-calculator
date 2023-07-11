import { useField, useFormik } from 'formik'
import React from 'react'
import './input.scss'

interface InputProps {
    name: string;
    label: string;
}

const Input = (props: InputProps) => {
    const [field, meta, helpers] = useField(props);

    const isError = Boolean(meta.error) && Boolean(!field.value)

    return (
        <div>
            <label htmlFor='input' className='input__label'>{props.label}</label>
            <input id="input" className={'input'} type="number" {...field} {...props} />

            {isError && <p className='input__error'>{meta.error}</p>}
        </div>
    )
}

export default Input