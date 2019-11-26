import request from '../configs/nietServerApi';

export default async data => {
  try {
    const response = await request.post('/insurance/pre-price', {
      ...data
    });
    return response;
  } catch (error) {
    return error;
  }
};
