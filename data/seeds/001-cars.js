exports.seed = function (knex) {
  // Deletes ALL existing entries
  //Truncate resets ID's  as well as deleting existing entries but should not be used in production in order to not delete existing data
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Audi',
          model: 'A4',
          mileage: '0',
          VIN: '1A2S3D45D',
          automatic: true,
          'title status': 'clean',
        },
        {
          make: 'BMW',
          model: 'c300',
          mileage: '0',
          VIN: '12345AQWSED',
          automatic: true,
          'title status': 'clean',
        },
        {
          make: 'Toyota',
          model: 'camry',
          mileage: '0',
          VIN: 'ASWDEF12344',
          automatic: true,
          'title status': 'clean',
        },
      ]);
    });
};
