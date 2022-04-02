import * as Yup from 'yup';

const validationWhereHaveYouBeenSchema = Yup.object().shape({
    country: Yup.string()
        .required('Country is required'),
    city: Yup.string()
        .required('City is required'),
    description: Yup.string()
        .required('Description is required'),
    image: Yup.string()
        .required('Please copy/paste img link URL')
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            // 'Enter correct url!'
        ),
})

export default validationWhereHaveYouBeenSchema;