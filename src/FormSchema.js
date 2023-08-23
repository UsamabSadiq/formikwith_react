import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().min(3, 'To Short').max(20, 'To Long').required('Enter valid Name..'),
    email: Yup.string().email().required('Email is Required..')
})