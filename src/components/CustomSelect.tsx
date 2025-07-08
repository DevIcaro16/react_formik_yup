import { useField } from 'formik';
import { ReactNode } from 'react';

interface CustomSelectProps {
    id: string;
    label: string;
    name: string;
    placeholder?: string;
    children: ReactNode;
}

const CustomSelect = ({ id, label, children, ...props }: CustomSelectProps) => {

    const [field, meta] = useField(props.name);

    return (
        <>
            <div className='form-group'>
                <label htmlFor={props.name}>{label}</label>
                <select
                    {...field}
                    {...props}
                    id={id}
                    className={meta.touched && meta.error ? "input-error" : ""}
                    aria-label={label}
                    title={label}
                >
                    {children}
                </select>
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {meta.error}
                </p>
            </div>
        </>
    )
}

export default CustomSelect