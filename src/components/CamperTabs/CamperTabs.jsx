import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/camperSlice';
import CamperForm from '../CamperForm/CamperForm';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';
import css from './CamperTabs.module.css';

const TabComponents = {
  features: CamperFeatures,
  reviews: CamperReviews,
}

const CamperTabs = () => {
  const [activeTab, setActiveTab] = useState('features');
  const camper = useSelector(selectCamper);

  if (!camper) return null;

  const TabComponent = TabComponents[activeTab];

  return (
    <div className={css.CamperTabs}>
      <div className={css.CamperTabs__header}>
        <button
          type='button'
          className={activeTab === 'features' ? css.active : ''}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>

        <button
          type='button'
          className={activeTab === 'reviews' ? css.active : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={css.CamperTabs__content}>
        <TabComponent />
        <CamperForm />
      </div>
    </div>
  )
}

export default CamperTabs;