import request from '../configs/nietServerApi';

export default async carNumber => {
  try {
    const response = await request.post('/car/get-by-number', { carNumber });
    console.log('car info -> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
