import request from '../configs/nietServerApi';

export default async iin => {
  try {
    const response = await request.post('/insurance/get-final-price', { iin });
    console.log('final price -> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
