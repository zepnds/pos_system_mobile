import * as yup from 'yup'
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required('Email is required!')
    .email('Please enter a valid email')
    .trim(),
  password: yup.string().required('Password is required!').trim(),
})
