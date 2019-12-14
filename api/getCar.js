import request from '../configs/nietServerApi';

export default async (carInfo, type) => {
  try {
    const response = await request.post('/car/get-by-number', { carInfo, type });
    console.log('car info -> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
