import { useField } from 'formik';

interface CustomInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
}

const CustomInput = ({ label, ...props }: CustomInputProps) => {

    const [field, meta] = useField(props.name);

    return (
        <>
            <div className='form-group'>
                <label htmlFor={props.name}>{label}</label>
                <input
                    {...field}
                    {...props}
                    className={meta.touched && meta.error ? "input-error" : ""}
                />
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {meta.error}
                </p>
            </div>
        </>
    )
}

export default CustomInput