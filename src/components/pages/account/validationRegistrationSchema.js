import * as Yup from 'yup';

const validationChangeIfoSchema = Yup.object().shape({
    username: Yup.string()
        // .required('Confirm Password is required')
        // .min(5, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters')
        .notRequired()
        .when('username', {
            is: (value) => value?.length,
            then: (rule) => rule.min(5, 'Username must be at least 6 characters'),
        }),
    email: Yup.string()
        .email('Email is invalid'),
    password: Yup.string()
        .max(40, 'Password must not exceed 40 characters')
        .notRequired()
        .when('password', {
            is: (value) => value?.length,
            then: (rule) => rule.matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        }),
    confirmPassword: Yup.string()
        // .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),

},
[
    // Add Cyclic deps here because when require itself
    ['username', 'username'], ['password', 'password'],
])

export default validationChangeIfoSchema;