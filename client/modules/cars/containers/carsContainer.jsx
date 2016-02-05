import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import Car from '../components/carsComponent.jsx';
import Cars from '../../../../lib/collections/cars';

const composerFunction = (props, onData) => {
  if (Meteor.subscribe('cars').ready()) {
    const cars = Cars.find({}, { sort: { createAt: 1 } }).fetch();
    onData(null, { cars });
  }
};

const CarsContainer = composeWithTracker(composerFunction)(Car);
export default CarsContainer;
