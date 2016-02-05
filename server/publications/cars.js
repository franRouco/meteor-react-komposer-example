import { Meteor } from 'meteor/meteor';

import Cars from '/lib/collections/cars';

Meteor.publish('cars', () => Cars.find());
