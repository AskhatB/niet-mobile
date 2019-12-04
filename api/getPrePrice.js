import request from '../configs/nietServerApi';

export default async carNumberArray => {
  try {
    const response = await request.post('/insurance/pre-price', {
      carNumberArray
    });
    console.log('preprice api --> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
