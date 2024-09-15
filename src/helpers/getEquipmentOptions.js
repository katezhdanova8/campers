import { Options } from '../constants/CamperOptions.constants';

export const getEquipmentOptions = (camper) => {
  const options = [];

  Options.equipment.forEach(option => {
    if (['transmission', 'engine'].includes(option.key)) {
      if (camper[option.key] === option.id.split('-')[1]) {
        options.push(option);
      }
    } else if (camper[option.key]) {
      options.push(option);
    }
  });

  return options;
};