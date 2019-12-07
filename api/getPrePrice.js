import request from '../configs/nietServerApi';

export default async (carNumberArray, iin) => {
  try {
    const response = await request.post('/insurance/pre-price', {
      carNumberArray,
      iin
    });
    console.log('preprice api --> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
