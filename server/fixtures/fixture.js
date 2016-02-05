import Cars from '../../lib/collections/cars';

if (!Cars.findOne()) {
  for (let car = 1; car <= 5; car++) {
    const name = `Car ${car}`;
    const createAt = new Date();
    Cars.insert({ name, createAt });
  }
}
