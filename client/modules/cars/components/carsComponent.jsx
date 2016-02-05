import React from 'react';

const Car = ({ cars }) => (
  <div>
    <h1>Cars</h1>
    <ul>
      {cars.map(car => (
        <li key={ car._id }>
          { car.name }
        </li>
      ))}
    </ul>
  </div>
);

export default Car;
