import { useFormik } from 'formik';
import { BasicRegister, basicSchema } from '../schemas/schema-yup';
import { Loader } from 'lucide-react';

const BasicForm = () => {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik<BasicRegister>({

        initialValues: {
            email: "",
            age: "",
            password: "",
            password_confirmation: ""
        },
        validationSchema: basicSchema,
        onSubmit: async (_values, actions) => {
            // console.log('Form values:', values);
            // console.log('Form actions:', actions);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            actions.resetForm();
            alert('Form Resetado!');
        },
    });

    // console.log(errors)

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            {/* <form autoComplete='off'> */}

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder='Digite seu E-mail'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : ""}
                />
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {errors.email}
                </p>
            </div>

            <div className="form-group">
                <label htmlFor="age">Idade</label>
                <input
                    id="age"
                    type="text"
                    placeholder='Digite sua Idade'
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.age && touched.age ? "input-error" : ""}
                    onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, "");
                    }}
                />
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {errors.age}
                </p>
            </div>

            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    placeholder='Digite sua Senha'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? "input-error" : ""}
                />
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {errors.password}
                </p>
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Confirmar Senha</label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder='Confirme sua Senha'
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password_confirmation && touched.password_confirmation ? "input-error" : ""}
                />
            </div>
            <div className="h-1 -mt-4 mb-6">
                <p className="text-xs text-red-400">
                    {errors.password_confirmation}
                </p>
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
                <div className="flex items-center justify-center">
                    {
                        isSubmitting ? <Loader className='animate-spin' /> : 'Cadastrar'
                    }
                </div>
            </button>
        </form>
    )
}

export default BasicForm;