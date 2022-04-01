import * as Yup from 'yup';

const validationRegistrationSchema = Yup.object().shape({
    fullname: Yup.string()
        .required('Fullname is required'),
    username: Yup.string()
        .required(/^[A-Z][a-z0-9_-]{3,19}$/)
        .required('Username is required')
        .min(5, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        // .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Terms is required'),
    // gender: Yup.bool()
    //     .required('A radio option is required')
        // .oneOf([0 , 1]),
})

export default validationRegistrationSchema;