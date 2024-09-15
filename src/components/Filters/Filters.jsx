import { useEffect, useState } from 'react';
import { useMedia } from 'use-media';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, resetFilters, selectFilters } from '../../redux/filtersSlice';
import { Options } from '../../constants/CamperOptions.constants';
import Input from '../Input/Input';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Drawer from '../Drawer/Drawer';
import Multiselect from '../Multiselect/Multiselect';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Filters.module.css';

const FiltersContent = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSubmit = (values) => {
    const itemsToRemove = {
      equipment: filters.equipment.filter(item => !values.equipment.includes(item)),
      type: filters.type.filter(item => !values.type.includes(item)),
    };

    dispatch(changeFilter({
      location: values.location,
      equipment: values.equipment,
      type: values.type,
      itemsToRemove,
    }));
    onSubmit();
  }

  return (
    <Formik
      initialValues={{
        location: filters.location,
        equipment: filters.equipment,
        type: filters.type
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.Filters}>
          <Input
            label="Location"
            name="location"
            placeholder="Enter a location"
            spriteIconId="map"
          />
          <Typography
            variant="body2"
            className={css.Filters__title}
          >
            Filters
          </Typography>

          <Multiselect
            label="Vehicle equipment"
            name="equipment"
            options={Options.equipment}
          />

          <Multiselect
            label="Vehicle type"
            name="type"
            options={Options.type}
          />
          <Button
            type="submit"
            text="Search"
          />
        </Form>
      )}
    </Formik>
  );
}

const MobileFilters = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={css.Filters__button}
        onClick={() => setOpen(!open)}
      >
        <SvgIcon spriteIconId="filters" />
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <FiltersContent onSubmit={() => setOpen(false)} />
      </Drawer>
    </>
  )
}

const Filters = () => {
  const isSmallScreen = useMedia({ maxWidth: '1366px' });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    }
  }, [dispatch]);

  return (
    <>
      {isSmallScreen ? <MobileFilters /> : <FiltersContent />}
    </>
  )
}

export default Filters;