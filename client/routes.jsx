import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './modules/globals/layout.jsx';
import CarsContainer from './modules/cars/containers/carsContainer.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (
        <div>
          <CarsContainer />
        </div>
      ),
    });
  },
});
