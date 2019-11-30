import request from '../configs/nietServerApi';

export default async (
  carNumber,
  carModel,
  carMark,
  carYear,
  region,
  vin,
  iin
) => {
  try {
    const response = await request.post('/insurance/pre-price', {
      carNumber,
      carModel,
      carMark,
      carYear,
      region,
      vin,
      iin
    });
    console.log('preprice api --> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
