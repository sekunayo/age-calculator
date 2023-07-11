import * as Yup from 'yup';


Yup.addMethod(Yup.string, "day", function (errorMessage) {
    return this.test(`test-invalid-date`, errorMessage, function (value) {
        const { path, createError, parent } = this;
        Yup.date().isValid('The date is invalid')

        return (
            createError({ path, message: errorMessage })
        );
    });
});

export const validationSchema = Yup.object().shape({
    day: Yup.number().min(1, 'The day number is not between 1-31')
        .max(31, 'The day number is not between 1-31')
        .required('Day number is required'),
    month: Yup.number().min(1, 'The month number is not between 1-12')
        .max(12, 'The month number is not between 1-12')
        .required('Month number is required'),
    year: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Year number is required')
});
