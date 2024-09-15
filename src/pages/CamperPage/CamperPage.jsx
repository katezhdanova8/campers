import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchCamper } from '../../redux/thunks';
import Container from '../../components/Container/Container';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import CamperTabs from '../../components/CamperTabs/CamperTabs';
import css from './CamperPage.module.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { selectCamper } from '../../redux/camperSlice';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  return (
    <Container>
      <div className={css.CamperPage}>
        <CamperDetails />
        <CamperTabs />
      </div>
    </Container>
  );
}

export default CamperPage;