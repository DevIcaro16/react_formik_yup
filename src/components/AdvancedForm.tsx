import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas/schema-yup';
import CustomSelect from './CustomSelect';
import CustomCheckBox from './CustomCheckBox';
import { Loader } from 'lucide-react';

const AdvancedForm = () => {

    return (

        <Formik
            initialValues={{ username: '', jobType: '', acceptedTos: false }}
            validationSchema={advancedSchema}
            onSubmit={async (_values, actions) => {
                // console.log('Form values:', _values);
                // console.log('Form actions:', actions);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                actions.setSubmitting(false);
                actions.resetForm();
                // alert('Form Resetado!');
            }}
        >
            {({ isSubmitting }) => (

                <Form>

                    <CustomInput
                        label="Nome"
                        name="username"
                        type="text"
                        placeholder="Digite seu nome"
                    />

                    <CustomSelect
                        id='jobType'
                        label="Tipo de Trabalho"
                        name="jobType"
                        placeholder="Qual o seu tipo de trabalho?"
                    >
                        <option value="">Por favor, informe Qual o seu tipo de trabalho.</option>
                        <option value="Designer">Designer</option>
                        <option value="Desenvolvedor">Desenvolvedor</option>
                        <option value="gerente">Gerente</option>
                    </CustomSelect>

                    <CustomCheckBox
                        type="checkbox"
                        name='acceptedTos'
                        label="Aceito os termos e condições"
                    />

                    <button type="submit" className="btn" disabled={isSubmitting}>
                        <div className="flex items-center justify-center">
                            {
                                isSubmitting ? <Loader className='animate-spin' /> : 'Cadastrar'
                            }
                        </div>
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default AdvancedForm;