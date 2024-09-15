import { Formik, Form } from 'formik';
import { date, object, string } from 'yup';
import toast from 'react-hot-toast';
import { TOASTER_CONFIG } from '../../constants/Toaster.constants';
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import css from './CamperForm.module.css';

const validationSchema = object({
  name: string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
  email: string()
    .email('Invalid email')
    .required('Email is required'),
  date: date()
    .required('Date is required'),
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const CamperForm = () => {
  const onSubmit = () => {
    toast.success('Your booking has been successfully sent!', TOASTER_CONFIG)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({
        errors,
        touched,
      }) => (
        <Form className={css.CamperForm}>
          <div className={css.CamperForm__header}>
            <Typography variant="h3">
              Book your campervan now
            </Typography>
            <Typography variant="body">
              Stay connected! We are always ready to help you.
            </Typography>
          </div>
          <div className={css.CamperForm__field}>
            <Input
              type="text"
              name="name"
              placeholder="Name*"
            />
            {errors.name && touched.name && (
              <Typography variant="body" className={css.CamperForm__fieldError}>
                {errors.name}
              </Typography>
            )}
          </div>

          <div className={css.CamperForm__field}>
            <Input
              type="text"
              name="email"
              placeholder="Email*"
            />
            {errors.email && touched.email && (
              <Typography variant="body" className={css.CamperForm__fieldError}>
                {errors.email}
              </Typography>
            )}
          </div>

          <div className={css.CamperForm__field}>
            <DatePickerInput
              name="date"
              placeholder="Booking date*"
            />
            {errors.date && touched.date && (
              <Typography variant="body" className={css.CamperForm__fieldError}>
                {errors.date}
              </Typography>
            )}
          </div>

          <div className={css.CamperForm__field}>
            <TextArea
              name="comment"
              placeholder="Comment"
            />
          </div>
          <Button type="submit" text="Submit" />
        </Form>
      )
      }
    </Formik >
  )
}

export default CamperForm;