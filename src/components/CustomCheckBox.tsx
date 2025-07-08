import { useField } from 'formik';

interface CustomCheckBoxProps {
    label: string;
    name: string;
    type?: string;
}

const CustomCheckBox = ({ label, ...props }: CustomCheckBoxProps) => {

    const [field, meta] = useField(props.name);

    return (
        <>
            <div className='checkbox-group'>
                <input
                    {...field}
                    {...props}
                    checked={field.value}
                    className={meta.touched && meta.error ? "input-error" : ""}
                />
                <label htmlFor={props.name} className="checkbox-label">
                    {label}
                </label>
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {meta.error}
                </p>
            </div>
        </>
    )
}

export default CustomCheckBox;