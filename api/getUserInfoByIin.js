import request from '../configs/nietServerApi';

export default async (phone, iin) => {
  try {
    const response = await request.post('/userInfo/by-iin', { phone, iin });
    console.log('user info -> ', response);
    return response;
  } catch (error) {
    return error;
  }
};
