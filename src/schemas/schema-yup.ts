import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email Inválido!")
        .required("Email é Obrigatório!"),
    age: yup
        .string()
        .max(3, "Idade Inválida, impossível ter mais do que 999")
        .required("Idade é Obrigatório!"),
    password: yup
        .string()
        .required("Senha é Obrigatório!")
        .min(8, "Senha deve ter no mínimo 8 caracteres"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref('password'), undefined], "Senhas não são iguais!")
        .required("Confirmar Senha é Obrigatório!")
});

export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Nome deve ter pelo menos 3 caracteres!")
        .required("Nome é Obrigatório!"),
    jobType: yup
        .string()
        .oneOf(["Designer", "Desenvolvedor", "Gerente"], "Tipo Inválido!")
        .required("Tipo de trabalho é Obrigatório!"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Por favor aceite nossos termos de serviço!")
});

export type BasicRegister = yup.InferType<typeof basicSchema>;